module.exports = {
  apps: [
    {
      name: 'crediplus',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      watch: false,
      watch_delay: 1000,
      ignore_watch: ['node_modules', '.next'],
      env: {
        PORT: 3086,
        NODE_ENV: 'production',
      },
    },
  ],
};

//pm2 start node_modules/next/dist/bin/next --name crediplus -- start -p 3086