module.exports = {
  apps: [{
    name: 'nuxt/penny-cravatagalbena',
    script: './.output/server/index.mjs',
    args: 'start',
    env_dev: {
      NODE_ENV: 'development',
      PORT: 3014,
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 3014,
    }
  }],
  deploy: {
    dev: {
      user: 'whitecat',
      host: [
        {
          host: '89.38.233.240',
          port: '28448'
        },
      ],
      key: '~/.ssh/id_ed25519',
      ref: 'origin/main',
      repo: 'git@github.com:Fabian-Leahu/penny-cravatagalbena.git',
      ssh_options: ['ForwardAgent=yes'],
      path: '/home/whitecat/nuxt/penny-cravatagalbena/',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.cjs --env dev',
      'pre-setup': ''
    },
    production: {
      user: 'whitecat',
      host: [
        {
          host: '89.38.233.240',
          port: '28448'
        },
      ],
      key: '~/.ssh/id_ed25519',
      ref: 'origin/main',
      repo: 'git@github.com:Fabian-Leahu/penny-cravatagalbena.git',
      ssh_options: ['ForwardAgent=yes'],
      path: '/home/whitecat/nuxt/penny-cravatagalbena/',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.cjs --env production',
      'pre-setup': ''
    },
  }
};
