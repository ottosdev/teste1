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

               stage('Sonar') {
                   steps {
                       sh 'npm run sonar'
                   }
               }

               stage('build') {
                                  steps {
                                      sh 'npm run build'
                                  }
                              }
        }
    }
}

