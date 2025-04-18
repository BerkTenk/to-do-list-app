pipeline {
    agent { label 'built-in' }

    triggers {
        githubPullRequest {
            useGitHubHooks()
            orgWhitelist(['BerkTenk']) // İzin verilen kullanıcı veya organizasyon
            allowMembersOfWhitelistedOrgsAsAdmin()
        }
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/BerkTenk/to-do-list-app.git'
            }
        }

        stage('Black Duck - Detect') {
            steps {
                blackduck_detect detectProperties: '''
                    --detect.policy.check.fail.on.severities=ALL
                    --detect.project.version.name=2.0.0
                    --detect.project.version.update=true
                ''',
                downloadStrategyOverride: [$class: 'ScriptOrJarDownloadStrategy'],
                returnStatus: true
            }
        }
    }
}
