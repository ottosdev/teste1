pipeline {
    agent any

    stages {
        stage('SCM Checkout') {
            steps{
            url: 'https://github.com/ottosdev/teste1.git'
            }
        }
        stage('Install dependencies') {
                    steps {
                        sh 'npm install'
                    }
                }
        // run sonarqube test
        stage('Run Sonarqube') {
            environment {
                scannerHome = tool 'seplan-scanner';
            }
            steps {
              withSonarQubeEnv(credentialsId: 'sonar-front', installationName: 'sonar-qube') {
                sh "${scannerHome}/bin/sonar-scanner  -Dsonar.login=sqp_74f4fb48446f15408442b975666f296592186a2a"
              }
            }
        }
    }
}

