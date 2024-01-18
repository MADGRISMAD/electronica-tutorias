pipeline {
    agent any
    environment {
        nodejs = 'NodeJS18.19'
    }
    stages {
        stage('Fetch') {
            steps {
                git url: 'https://github.com/MADGRISMAD/electronica-tutorias.git', branch: 'backend'
            }
        }
        stage('Installing dependencies') {
            steps {
                nodejs(nodeJSInstallationName: nodejs) {
                    sh 'npm install'
                }
            }
        }
        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: nodejs) {
                    sh 'npm run build'
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing due'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the app (pending)'
            }
        }
    }
}
