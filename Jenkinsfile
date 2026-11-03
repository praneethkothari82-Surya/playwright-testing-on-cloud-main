pipeline {
  agent any

  options {
    timestamps()
    disableConcurrentBuilds()
  }

  stages {
    stage('Install dependencies') {
      steps {
        sh 'node --version && npm --version && npm ci'
      }
    }

    stage('Run Playwright tests') {
      steps {
        withCredentials([
          usernamePassword(
            credentialsId: 'lambdatest',
            usernameVariable: 'LT_USERNAME',
            passwordVariable: 'LT_ACCESS_KEY'
          ),
          usernamePassword(
            credentialsId: 'ecommerce-test-user',
            usernameVariable: 'E2E_USERNAME',
            passwordVariable: 'E2E_PASSWORD'
          )
        ]) {
          sh 'npm test'
        }
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'playwright-report/**, test-results/**', allowEmptyArchive: true
    }
  }
}
