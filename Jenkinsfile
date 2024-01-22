pipeline {
    agent any
    environment {
        npmrcConfig = '32b95a72-6725-4f33-ab61-211c33729898'
        ECR_HOST = 'http://785766549365.dkr.ecr.us-west-1.amazonaws.com'
        MONGODB_URI_DEV = credentials('MONGO_URI_DEV')
        SECRET = credentials('SECRET')
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
                sh """cat <<EOF > Dockerfile
                FROM node:18.18.0
                ENV PORT=3001
                ENV MONGODB_URI_DEV=$MONGODB_URI_DEV
                ENV SECRET=$SECRET
                COPY dist/ /app
                WORKDIR /app

                EXPOSE 3001

                CMD ["node", "app.bundle.js"]
EOF"""
                script {
                    app = docker.build('tutorias_backend')
                }
            }
        }
        stage('Push artifact') {
            steps {
                script {
                    docker.withRegistry("${ECR_HOST}") {
                        app.push()
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    sh 'aws ecs update-service --region us-west-1 --cluster tutorias --service backend --force-new-deployment'
                }
            }
        }
    }
}
