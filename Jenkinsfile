pipeline {
    agent any
    environment {
        npmrcConfig = '32b95a72-6725-4f33-ab61-211c33729898'
        ECR_HOST = 'http://785766549365.dkr.ecr.us-west-1.amazonaws.com'
        DISCORD_WEBHOOK = credentials('discordWebhook')
    }
    stages {
        stage('Fetch and install') {
            steps {
                git url: 'https://github.com/MADGRISMAD/electronica-tutorias.git', branch: 'maddie-2'
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
//                 sh '''cat <<EOF > nginx.conf
//                 server {
//                     listen 8081;
//                     location / {
//                         root /app;

                //                     }
                //                 }
                // EOF
                //                 '''
                //                 sh '''cat <<EOF > Dockerfile
                //                 FROM nginx:alpine
                //                 COPY dist/ /app
                //                 COPY nginx.conf /etc/nginx/conf.d/default.conf
                //                 EXPOSE 8081
                //                 CMD ["nginx", "-g", "daemon off;"]
                // EOF'''
                script {
                    app = docker.build('tutorias_frontend')
                }
            }
        }
        stage('Push artifact') {
            steps {
                script {
                    docker.withRegistry("${ECR_HOST}", 'ecr:us-west-1:JenkinsAWS') {
                        app.push('latest')
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
                        sh 'aws ecs update-service --region us-west-1 --cluster tutorias --service frontend --force-new-deployment'
                        sh "curl -X POST http://$USERPASS@localhost:8080/job/paac_tutorias_wakeup/build"
                    }
                }
            }
        }
        stage('Start discord task') {
            steps {
                    withCredentials([usernameColonPassword(credentialsId: 'buildCredentials', variable: 'USERPASS')]) {
                        sh "curl -X POST http://$USERPASS@localhost:8080/job/paac_discord/lastBuild/stop"
                        sleep(5)
                        sh "curl -X POST http://$USERPASS@localhost:8080/job/paac_discord/build"
                    }
            }
        }
    }
    post {
        failure {
            discordSend description: 'Build failed', footer: 'GG', link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: DISCORD_WEBHOOK
        }
    }
}
