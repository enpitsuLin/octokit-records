const WindiCSSWebpackPlugin = require("windicss-webpack-plugin");

/** @type {import('next').NextConfig} */
const config = {
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin());
    return config;
  },
  images: {
    domains: ["img1.doubanio.com", "img2.doubanio.com", "img3.doubanio.com", "img9.doubanio.com", "m.media-amazon.com"]
  }
};
module.exports = config;
