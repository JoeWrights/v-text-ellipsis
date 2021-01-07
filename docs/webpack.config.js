const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', './src/main.js'],
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: process.env.NODE_ENV === 'production' ? 'https://joewrights.github.io/v-text-ellipsis/dist' : '/dist',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, '.postcssrc.js')
              }
            }
          }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
    port: 7777
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.mode = 'production'
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:7].css'
    })
  ])
  module.optimization = {
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
  }
}
