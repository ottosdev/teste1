pipeline {
    agent any

    stages {
        stage('SCM Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/ottosdev/teste1.git'
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Sonar') {
            steps {
                sh 'npm run sonar'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}