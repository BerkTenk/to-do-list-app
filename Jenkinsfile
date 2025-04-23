node('built-in'){
   triggers {
        cron('H */6 * * *') // Her 6 saatte bir tetiklenir
      pollSCM('* * * * *')
    }
   stage('Checkout') {
        git 'https://github.com/BerkTenk/to-do-list-app.git'
    }
   stage('Black Duck - Detect'){
        blackduck_detect detectProperties: '''--detect.policy.check.fail.on.severities=ALL
--detect.project.version.name=2.0.0
--detect.project.version.update=true''', downloadStrategyOverride: [$class: 'ScriptOrJarDownloadStrategy'], returnStatus: true
    }
}
