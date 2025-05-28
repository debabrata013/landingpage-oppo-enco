pipeline {
    agent any

    environment {
        IMAGE_NAME = 'debabratap/landingpage-oppo-enco:latest'
        DOCKER_HUB_CREDENTIALS = 'dockerhub-creds-id'
    }

    stages {
       

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Project') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: "${DOCKER_HUB_CREDENTIALS}", usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh 'echo $PASSWORD | docker login -u $USERNAME --password-stdin'
                    sh 'docker push $IMAGE_NAME'
                }
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    docker stop nextjs-app || true
                    docker rm nextjs-app || true
                    docker run -d -p 3000:3000 --name nextjs-app $IMAGE_NAME
                '''
            }
        }
    }
}
