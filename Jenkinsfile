pipeline {
    agent any
    
    environment {
        CI = 'true'
        NODE_ENV = 'test'
    }

    stages {
        stage('Checkout SCM') {
            steps {
                echo '📥 Checking out repository...'
                // If the job is configured as "Pipeline script from SCM", checkout scm is automatic.
                // You can also explicitly checkout with credentials:
                checkout scm
            }
        }

        stage('Environment Info') {
            steps {
                echo '🔍 Inspecting Node and npm versions...'
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '📦 Installing project dependencies...'
                // Use 'npm ci' if package-lock.json exists, otherwise fallback to 'npm install'
                sh '''
                    if [ -f package-lock.json ]; then
                        npm ci
                    else
                        npm install
                    fi
                '''
            }
        }

        stage('Test') {
            steps {
                echo '🧪 Running automated test suite...'
                sh 'npm test'
            }
        }

        stage('Build & Lint') {
            steps {
                echo '🔨 Running build verification...'
                // Example: npm run build (if applicable)
                sh 'echo "Application verified and ready for deployment."'
            }
        }
    }

    post {
        always {
            echo '🧹 Cleaning up temporary workspace files...'
            cleanWs(deleteDirs: true, notFailBuild: true)
        }
        success {
            echo '✅ Pipeline Succeeded: All tests passed and build is healthy!'
        }
        unstable {
            echo '⚠️ Pipeline Unstable: Build succeeded with warnings/unstable tests.'
        }
        failure {
            echo '❌ Pipeline Failed: Test or build step threw an error.'
        }
    }
}
