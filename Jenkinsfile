pipeline {
    agent any
    environment {
        AWS_DEFAULT_REGION = 'us-west-1'
        npmrcConfig = '32b95a72-6725-4f33-ab61-211c33729898'
        ECR_HOST = 'https://785766549365.dkr.ecr.us-west-1.amazonaws.com'
        MONGODB_URI = credentials('MONGODB_URI')
        SECRET = credentials('SECRET')
        PORT = '3001'
        DISCORD_WEBHOOK = credentials('discordWebhook')
        NODE_ENV = 'prod'
        SMTP_EMAIL = credentials('SMTP_EMAIL')
        SMTP_PASSWORD = credentials('SMTP_PASSWORD')
    }
    stages {
        stage('Fetch and install') {
            steps {
                git url: 'https://github.com/MADGRISMAD/electronica-tutorias.git', branch: 'maddie-2'

                dir('./BackEnd') {
                    nodejs(nodeJSInstallationName: 'node') {
                        sh 'npm install'
                    }
                }
                dir('./FrontEnd') {
                    nodejs(nodeJSInstallationName: 'node') {
                        sh 'npm install'
                    }
                }
            }
        }
        stage('Build') {
                steps {
                dir('./BackEnd') {
                    nodejs(nodeJSInstallationName: 'node') {
                        sh 'npm run build'
                    }
                }

                dir('./FrontEnd') {
                    nodejs(nodeJSInstallationName: 'node') {
                        sh 'npm run build'
                    }
                }
                }
        }
        stage('Test') {
            steps {
                echo 'Testing due'
            }
        }
        stage('Create docker image') {
            steps {
                dir('./BackEnd') {
                    script {
                        back = docker.build('tutorias_backend', '--no-cache -f Dockerfile .')
                    }
                }
                dir('./FrontEnd') {
                    script {
                        front = docker.build('tutorias_frontend')
                    }
                }
            }
        }
        stage('Push artifact') {
            steps {
                script {
                    //     withCredentials([[
                    //     $class: 'AmazonWebServicesCredentialsBinding',
                    //     credentialsId: 'JenkinsAWS'
                    // ]]) {
                    docker.withRegistry(ECR_HOST, 'ecr:us-west-1:JenkinsAWS') {
                        back.push('latest')
                        front.push('latest')
                    }
                    }
                }
            }
        stage('Deploy') {
            steps {
                script {
                    withCredentials([usernameColonPassword(credentialsId: 'buildCredentials', variable: 'USERPASS')]) {
                        sh "curl -X POST http://$USERPASS@localhost:8080/job/paac_tutorias_wakeup/lastBuild/stop"
                        sleep(5)
                        withAWS(region: AWS_DEFAULT_REGION, credentials: 'JenkinsAWS') {
                            sh "aws ecs update-service --region '${AWS_DEFAULT_REGION}' --cluster tutorias --service backend --force-new-deployment"
                            sh "aws ecs update-service --region '${AWS_DEFAULT_REGION}' --cluster tutorias --service frontend --force-new-deployment"
                        }
                        sh "curl -X POST http://$USERPASS@localhost:8080/job/paac_tutorias_wakeup/build"
                    }

                // Get public IP from AWS
                }
            }
        }
        stage('Start Discord Task') {
            steps {
                withCredentials([usernameColonPassword(credentialsId: 'buildCredentials',  variable: 'USERPASS')]) {
                    sh "curl -X POST http://$USERPASS@localhost:8080/job/paac_discord/lastBuild/stop"
                    sleep(5)
                    sh "curl -X POST http://$USERPASS@localhost:8080/job/paac_discord/build"
                }
            }
        }
        }
    // stage('Build frontend') {
    //     steps {
    //         build job: 'paac_frontend'
    //     }
    // }
    post {
        success {
            discordSend description: 'Build successfull!!', footer: 'GG', link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: DISCORD_WEBHOOK
        }
        failure {
            discordSend description: 'Build failed', footer: 'GG', link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: DISCORD_WEBHOOK
        }
    }
    }
