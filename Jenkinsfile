pipeline {
    agent any

    environment {
        CI = 'true'
        PORT = '5000'
    }

    stages {
        stage('Checkout SCM') {
            steps {
                echo '📥 Checking out repository...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '📦 Installing project dependencies...'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo '🧪 Running automated test suite...'
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo '🚀 Deploying Node.js application...'
                sh '''
                    # Restart if already running, else start fresh
                    npx pm2 restart node-jenkins-demo 2>/dev/null || npx pm2 start src/index.js --name "node-jenkins-demo"
                '''
            }
        }

        stage('Health Check') {
            steps {
                echo '🩺 Verifying deployment health...'
                sh '''
                    sleep 2
                    curl -s http://localhost:5000
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline Succeeded: Node.js app is live and healthy on http://localhost:5000'
        }
        failure {
            echo '❌ Pipeline Failed: Check logs for details.'
        }
    }
}
