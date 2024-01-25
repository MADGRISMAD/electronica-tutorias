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
                    sh 'aws ecs update-service --region us-west-1 --cluster tutorias --service tutorias_stack --force-new-deployment'
                }
            }
        }
        stage('Notify Discord') {
            steps {
                script {
                    discordSend description: 'Build successfull!!, sending new IP...', footer: 'GG', link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: DISCORD_WEBHOOK

                    def taskId = sh(returnStdout: true, script: "aws ecs list-tasks --cluster tutorias --service-name tutorias_stack --query 'taskArns[0]' --output text").trim()
                    def networkId = sh(returnStdout: true, script: "aws ecs describe-tasks --cluster tutorias --tasks '$taskId' --query 'tasks[0].containers[0].networkInterfaces[0].attachmentId' --output text").trim()
                    def publicIp = sh(returnStdout: true, script: "aws ec2 describe-network-interfaces --filters 'Name=description,Values=*$networkId*' --query 'NetworkInterfaces[0].Association.PublicIp' --output text").trim()
                    sleep(60)
                    // Send IP to discord
                    discordSend description: "New IP: $publicIp", footer: 'Port 8081', link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: DISCORD_WEBHOOK
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
