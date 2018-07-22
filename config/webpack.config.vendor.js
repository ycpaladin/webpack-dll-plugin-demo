const path = require('path')
const webpack = require('webpack')
const AssetsPlugin = require('assets-webpack-plugin')
module.exports = {
  entry: {
    vendor: ['react','react-dom', 'react-router-dom', 'antd']
  },
  output: {
    path: path.join(__dirname, '../public/common'),
    filename: '[name].[hash:6].js',
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '../public/common', '[name]-manifest.json'),
      name: '[name]',
      // context: __dirname
    }),
    new AssetsPlugin({
      filename: 'bundle-config.json',
      path: './'
    })
  ]
}