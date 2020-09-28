const debug = process.env.NODE_ENV !== "production";

module.exports = {
  target: 'serverless',
  assetPrefix: !debug ? 'https://giorgiopogliani.me/' : '',
  webpack: function (config) {
    config.module.rules.push({ test: /\.md$/, use: 'raw-loader' })
    config.module.rules.push({ test: /\.yml$/, use: 'raw-loader' })
    return config
  }
}