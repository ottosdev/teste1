pipeline {
    agent any
    tools {
        nodejs "nodejs"  // Verifique o nome correto da instalação do NodeJS
    }
    stages {
        stage('SCM Checkout') {
            steps {
                script {
                    git url: 'https://github.com/ottosdev/teste1.git', branch: 'main', credentialsId: 'github'
                }
            }
        }

        stage('Run Sonarqube') {
            environment {
                scannerHome = tool 'seplan-scanner'  // Verifique o nome da instalação do Sonar Scanner no Jenkins
            }
            steps {
                script {
                    withSonarQubeEnv(credentialsId: 'sonar-front-2', installationName: 'sonar') {
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }

        stage('Run Install') {
            steps {
                script {
                    sh "npm install"
                }
            }
        }

        stage('Run Build') {
            steps {
                script {
                    sh "npm run build"
                }
            }
        }
    }
}
