const WindiCSSWebpackPlugin = require("windicss-webpack-plugin");

/** @type {import('next').NextConfig} */
const config = {
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin());
    return config;
  }
};
module.exports = config;
