pipeline {
    agent any

    stages {
        stage('SCM Checkout') {
            steps {
                git url: 'https://github.com/ottosdev/teste1.git', branch: 'main', credentialsId: 'github'
            }
        }
        
        // run sonarqube test
        stage('Run Sonarqube') {
            environment {
                scannerHome = tool 'seplan-scanner'
            }
            steps {
                withSonarQubeEnv(credentialsId: 'sonar-front', installationName: 'sonar') {
                    sh "${scannerHome}/bin/sonar-scanner"
                }
            }
        }
    }
}
