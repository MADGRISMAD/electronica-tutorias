pipeline {
    agent any
    environment {
        npmrcConfig = '32b95a72-6725-4f33-ab61-211c33729898'
        NEXUS_HOST = 'http://192.168.56.10:8082'
        NEXUS_REPO = 'repository/tutorias'
        // NEXUS_CREDENTIALS = credentials('nexusJenkins')
    }
    stages {
        stage('Fetch and install') {
            steps {
                git url: 'https://github.com/MADGRISMAD/electronica-tutorias.git', branch: 'backend'
                sh """
                #!/bin/sh

                cat <<EOF > .env
                PORT=${PORT}
                MONGODB_URI_DEV=${MONGODB_URI_DEV}
EOF"""
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
                sh '''cat <<EOF > Dockerfile
                FROM nginx:alpine
                ENV PORT=${PORT}
                RUN echo """ \
                server { \
                    listen $PORT; \
                    location / { \
                        autoindex on; \
                        root /app; \
                    } \
                } \
                """ > /etc/nginx/conf.d/default.conf
                COPY dist/ /app
EOF'''
                script {
                    app = docker.build("${NEXUS_REPO}/backend")
                }
            }
        }
        stage('Push artifact') {
            steps {
                script {
                    docker.withRegistry("${NEXUS_HOST}") {
                        app.push("${BUILD_NUMBER}")
                        app.push()
                    }
                }
            }
        // steps {
        //             success {
        //         nexusArtifactUploader(
        //     nexusVersion: 'nexus3',
        //     protocol: 'http',
        //     nexusUrl: '192.168.56.10:8081',
        //     groupId: 'com.electronica.tutorias',
        //     version: BUILD_NUMBER,
        //     repository: 'backend_tutorias',
        //     credentialsId: 'nexusLogin',
        //     artifacts: [
        //         [artifactId: "backend-tutorias-${BUILD_TIMESTAMP}",
        //         file: 'dist/app.bundle.js',
        //         type: 'js']
        //     ]
        // )
        //         nexusArtifactUploader(
        //     nexusVersion: 'nexus3',
        //     protocol: 'http',
        //     nexusUrl: '192.168.56.10:8081',
        //     groupId: 'com.electronica.tutorias',
        //     version: 'Latest',
        //     repository: 'backend_tutorias',
        //     credentialsId: 'nexusLogin',
        //     artifacts: [
        //         [artifactId: 'Latest',
        //         file: 'dist/app.bundle.js',
        //         type: 'js']
        //     ]
        // )
        //             }
        // }
        }
    }
}
