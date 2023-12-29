module.exports = ({ env }) => ({
  host: env("HOST", "localhost"),
  port: env.int("PORT", 1337),
  proxy: {
    enabled: env("PROXY_ENABLED", true),
    host: env("PROXY_HOST", "t.49g.com"),
    port: env.int("PROXY_PORT", 80),
    ssl: env("PROXY_SSL", false),
  },
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
