module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.IgnorePlugin({ resourceRegExp: /^pg-native$/ })
    );
    // Important: return the modified config
    return config;
  },
};
