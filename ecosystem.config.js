module.exports = {
  apps: [
    {
      name: 'NuxtRemote21',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
    },
  ],
}
/*
Now build your app with npm run build.
And serve it with pm2 start.
Check the status pm2 ls.
*/
