pipeline {
    agent any

    stages {
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
