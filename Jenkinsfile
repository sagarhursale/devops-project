pipeline {
    agent any

    environment {
        IMAGE_NAME = "devops-app"
    }

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/sagarhursale/devops-project.git'
            }
        }

        stage('Build Docker') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:3000 $IMAGE_NAME'
            }
        }

        stage('Terraform') {
            steps {
                dir('terraform') {
                    sh 'terraform init'
                    sh 'terraform apply -auto-approve'
                }
            }
        }
    }
}