pipeline {
    agent any
    tools {
        nodejs "nodejs"
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
                scannerHome = tool 'seplan-scanner'
            }
            steps {
                script {
                    
                    withSonarQubeEnv(credentialsId: 'sonar-front-2', installationName: 'sonar') {
                    sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }

        stage('Run Install') {  // Corrigido
            steps {
                script {
                 sh "npm install"  // Corrigido o comando}
                }
            }
        }

        stage('Run Build') {  // Corrigido
            steps {
                script {
                sh "npm run build"
                }
            }
        }
    }
}
