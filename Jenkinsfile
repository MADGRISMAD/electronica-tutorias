pipeline {
    agent any
    environment {
        npmrcConfig = '32b95a72-6725-4f33-ab61-211c33729898'
        ECR_HOST = 'http://785766549365.dkr.ecr.us-west-1.amazonaws.com'
    }
    stages {
        stage('Fetch and install') {
            steps {
                git url: 'https://github.com/MADGRISMAD/electronica-tutorias.git', branch: 'maddie-2'
                    sh 'cd frontend/tutorias-front-end'
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
                sh '''cat <<EOF > nginx.conf
                server {
                    listen 8081;
                    location / {
                        root /app;

                    }
                }
EOF
                '''
                sh '''cat <<EOF > Dockerfile
                FROM nginx:alpine
                COPY dist/ /app
                COPY nginx.conf /etc/nginx/conf.d/default.conf
                EXPOSE 8081
                CMD ["nginx", "-g", "daemon off;"]
EOF'''
                script {
                    app = docker.build('tutorias_frontend')
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
                    sh 'aws ecs update-service --region us-west-1 --cluster tutorias --service frontend --force-new-deployment'
                }
            }
        }
    }
}
