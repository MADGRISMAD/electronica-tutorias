pipeline{
    agent any
    stages{
        environment{
            git_url = 'https://github.com/MADGRISMAD/electronica-tutorias.git'
        }
        stage('Fetch'){
            steps{
                git url: git_url, branch: 'backend'
            }
        }
        stage('Installing dependencies'){
            steps{
                sh 'npm install'
            }
        }
        stage('Build'){
            steps{
                sh 'npm run build'
            }
        }
        stage('Test'){
            steps{
                echo 'Testing due'
            }
        }
        stage('Deploy'){
            steps{
                echo 'Deploying the app (pending)'
            }
        }
    }
}