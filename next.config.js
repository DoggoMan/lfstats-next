module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.IgnorePlugin({ resourceRegExp: /^pg-native$/ })
    );
    // Important: return the modified config
    return config;
  },
  //amplify env var workaround
  env: {
    LF_S3_ACCESS_KEY: process.env.LF_S3_ACCESS_KEY,
    LF_S3_SECRET_KEY: process.env.LF_S3_SECRET_KEY,
    POSTGRES_DB: process.env.POSTGRES_DB,
    POSTGRES_HOST: process.env.POSTGRES_HOST,
    POSTGRES_PASS: process.env.POSTGRES_PASS,
    POSTGRES_PORT: process.env.POSTGRES_PORT,
    POSTGRES_USER: process.env.POSTGRES_USER,
  },
};
