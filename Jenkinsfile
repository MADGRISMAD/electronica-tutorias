pipeline {
    agent any
    environment {
        nodejs = 'NodeJS18.19'
        npmrcConfig = '32b95a72-6725-4f33-ab61-211c33729898'
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
        stage('Store artifact') {
            steps {
                echo 'Deploying the app (pending)'
            }
        }
    }
    post {
        success {
            nexusArtifactUploader(
                nexusVersion: 'nexus3',
                protocol: 'http',
                nexusUrl: '192.168.56.10:8081',
                groupId: 'com.electronica.tutorias',
                version: BUILD_NUMBER,
                repository: 'backend_tutorias',
                credentialsId: 'nexusLogin',
                artifacts: [
                    [artifactId: "backend-tutorias-${BUILD_TIMESTAMP}",
                    file: 'dist/app.bundle.js',
                    type: 'js']
                ]
            )
            nexusArtifactUploader(
                nexusVersion: 'nexus3',
                protocol: 'http',
                nexusUrl: '192.168.56.10:8081',
                groupId: 'com.electronica.tutorias',
                version: 'Latest',
                repository: 'backend_tutorias',
                credentialsId: 'nexusLogin',
                artifacts: [
                    [artifactId: "Latest",
                    file: 'dist/app.bundle.js',
                    type: 'js']
                ]
            )
        }
    }
}
