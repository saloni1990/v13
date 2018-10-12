module.exports = {
    apps: [{
      name: 'sallearnstocodev2',
      script: './app.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-18-130-43-67.eu-west-2.compute.amazonaws.com',
        key: '~/Desktop/node.pem',
        ref: 'origin/master',
        repo: 'git@github.com:saloni1990/v13.git',
        path: '/home/ubuntu/v13',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }