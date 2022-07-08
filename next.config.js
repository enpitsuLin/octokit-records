const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

/** @type {import('next').NextConfig} */
const config = {
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin())
    return config
  },
  images: {
    domains: ['"m.media-amazon.com"'].concat(
      Array.from({ length: 10 }, (_, i) => i + 1).map((i) => `img${i}.doubanio.com`)
    )
  }
}
module.exports = config
