pipeline {
    agent any

    stages {

        stage('Start') {
            steps {
                echo '🚀 Jenkins pipeline started!'
            }
        }

        stage('Build') {
            steps {
                echo '🔨 Building the application...'
                sh 'echo Build successful!'
            }
        }

        stage('Test') {
            steps {
                echo '🧪 Running tests...'
                sh 'echo All tests passed!'
            }
        }

        stage('Deploy') {
            steps {
                echo '📦 Deploying application...'
                sh 'echo Deployment successful!'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline completed successfully!'
        }

        failure {
            echo '❌ Pipeline failed!'
        }
    }
}