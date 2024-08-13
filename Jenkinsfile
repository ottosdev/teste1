pipeline {
    agent any

    stages {
        stage('SCM Checkout') {
            steps{
            url: 'https://github.com/ottosdev/teste1.git'
            }
        }
        // run sonarqube test
        stage('Run Sonarqube') {
            environment {
                scannerHome = tool 'seplan-scanner';
            }
            steps {
              withSonarQubeEnv(credentialsId: 'seplan', installationName: 'sonar-front') {
                sh "${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=front -Dsonar.sources=. -Dsonar.host.url=http://localhost:9000 -Dsonar.token=sqp_74f4fb48446f15408442b975666f296592186a2a"
              }
            }
        }
    }
}

