pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                node {
                    sh 'npm install'
                }
            }
        }

        stage('Sonar') {
            steps {
                node {
                    sh 'npm run sonar'
                }
            }
        }

        stage('Build') {
            steps {
                node {
                    sh 'npm run build'
                }
            }
        }
    }
}
