pipeline {
    agent any
    environment {
        AWS_ACCOUNT_ID = credentials('AWS_ACCOUNT_ID')
        AWS_DEFAULT_REGION = 'us-west-1'
        npmrcConfig = '32b95a72-6725-4f33-ab61-211c33729898'
        ECR_HOST = 'https://785766549365.dkr.ecr.us-west-1.amazonaws.com'
        MONGODB_URI_DEV = credentials('MONGO_URI_DEV')
        SECRET = credentials('SECRET')
        DISCORD_WEBHOOK = credentials('discordWebhook')
    }
    stages {
        stage('Fetch and install') {
            steps {
                git url: 'https://github.com/MADGRISMAD/electronica-tutorias.git', branch: 'backend'
                withNPM(npmrcConfig: npmrcConfig) {
                    sh 'npm install'
                }
            }
        }
        stage('Build') {
            steps {
                withNPM(npmrcConfig: npmrcConfig) {
                    sh 'npm run build'
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
                script {
                    app = docker.build('tutorias_backend', "--build-arg MONGODB_URI_DEV='$MONGODB_URI_DEV' --build-arg SECRET='$SECRET' --no-cache -f Dockerfile .")
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
                        app.push('latest')
                    }
                    }
                }
            }
        stage('Deploy') {
            steps {
                script {
                    withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'buildCredentials', usenameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
                    sh "curl -X POST http://$USERNAME:$PASSWORD@localhost:8080/job/paac_tutorias_wakeup/lastBuild/stop"
                    sleep(5)
                    sh "aws ecs update-service --region '${AWS_DEFAULT_REGION}' --cluster tutorias --service backend --force-new-deployment"
                    sh "curl -X POST http://$USERNAME:$PASSWORD@localhost:8080/job/paac_tutorias_wakeup/build"
                    }

                // Get public IP from AWS
                }
            }
        }
        stage('Start Discord Task') {
            steps{
                withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'buildCredentials', usenameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
                sh "curl -X POST http://$USERNAME:$PASSWORD@localhost:8080/job/paac_discord/lastBuild/stop"
                sleep(5)
                sh "curl -X POST http://$USERNAME:$PASSWORD@localhost:8080/job/paac_discord/build"
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
