pipeline {
    agent any

    stages {
        stage('SCM Checkout') {
            steps{
           git branch: 'main', url: 'https://github.com/ottosdev/teste1.git'
            }
        }
        // run sonarqube test
        stage('Run Sonarqube') {
            environment {
                scannerHome = tool 'seplan-scanner';
            }
            steps {
              withSonarQubeEnv(credentialsId: 'seplan', installationName: 'sonar-front') {
                sh "${scannerHome}/bin/sonar-scanner"
              }
            }
        }

        stage('Build') {
            steps {

            }
        }
    }
}