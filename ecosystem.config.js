module.exports = {
  apps: [
    {
      name: 'NuxtRemote21',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      port: 3100,
    },
  ],
}
