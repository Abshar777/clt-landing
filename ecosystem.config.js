module.exports = {
  apps: [
    {
      name: "clt-landing",
      script: "npm",
      args: "start",
      cwd: "/clt-landing",
      pre_start: "npm run build",
      exec_mode: "fork",
      instances: 1,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
