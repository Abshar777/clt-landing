module.exports = {
  apps: [
    {
      name: "clt-landing",
      script: "npm",
      args: "start",
      cwd: "/clt-landing",
      exec_mode: "fork",
      instances: 1,
      env: {
        NODE_ENV: "production",
      }
    }
  ]
};
