module.exports = ({ env }) => ({
  host: env("HOST", "localhost"),
  port: env.int("PORT", 1337),
  proxy: {
    enabled: env("PROXY_ENABLED", true),
    host: env("PROXY_HOST", "localhost"), // Should match the server_name in your Nginx config
    port: env.int("PROXY_PORT", 80), // Should match the port in your Nginx config
    ssl: env("PROXY_SSL", true), // Set to true if using HTTPS
  },
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
