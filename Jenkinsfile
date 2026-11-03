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
        sh 'npm i allure-commandline'
      }
    }

    stage('Install browser') {
      steps {
        sh 'npx playwright install chromium'
      }
    }

    stage('Run Playwright tests') {
      steps {
        sh 'npm test'
      }
    }
  }

  post {
    always {
      script {
        if (fileExists('allure-results')) {
          allure includeProperties: false, results: [[path: 'allure-results']]
        } else {
          echo 'Allure results were not generated.'
        }
      }
      archiveArtifacts artifacts: 'allure-results/**, playwright-report/**, test-results/**', allowEmptyArchive: true
    }
  }
}
