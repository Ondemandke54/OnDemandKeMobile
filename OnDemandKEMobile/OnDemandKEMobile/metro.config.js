const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);

// Force polling instead of watch mode
config.server = {
  ...config.server,
  usePolling: true,
};

module.exports = config;
