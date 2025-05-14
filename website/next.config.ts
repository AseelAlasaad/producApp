// next.config.js
const { i18n } = require('./next-i18next.config'); // Destructure the i18n object directly

const nextConfig = {
  reactStrictMode: true,
  i18n,  // Use the i18n object directly
};

module.exports = nextConfig;
