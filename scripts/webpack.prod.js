const { merge } = require('webpack-merge')
const { pathResolve } = require('./utils.js')
const webpackCommon = require('./webpack.common.js')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const currentConfig = {
  entry: {
    index: pathResolve('../src/index.js') // 入口文件
  },
  output: {
    path: pathResolve('../dist'), // 打包后的文件存放在dist文件夹
    publicPath: '../dist/', // 设置公共路径
    filename: 'v-text-ellipsis.js', // 打包后输出文件
    libraryTarget: 'umd'
  },
  optimization: {
    minimizer: [
      new UglifyjsWebpackPlugin({
        parallel: true,
        sourceMap: false,
        uglifyOptions: {
          output: {
            comments: false
          }
        }
      })
    ],
    noEmitOnErrors: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:7].css'
    })
  ]
}

module.exports = merge(currentConfig, webpackCommon)
