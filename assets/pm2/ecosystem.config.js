module.exports = {
  apps : [{
      name: `DrDocu`,
      script: 'npm',
      args: 'start:raw',
      node_args: ['--max_old_space_size=2048'],

      watch: false,
      max_memory_restart: '512M',
      max_restarts: 10,
      exp_backoff_restart_delay: 2500,

      out_file: `logs/DrDocu-out.log`,
      error_file: `logs/DrDocu-error.log`,

  }]
}