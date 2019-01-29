module.exports = {
  apps: [
    {
      name: 'oncohelp-web',
      script: 'server.js',
      watch: false,
      instances: 'max',
      exec_mode: 'cluster',
      merge_logs: true,
      env_production: { NODE_ENV: 'production' },
    },
  ],
}
