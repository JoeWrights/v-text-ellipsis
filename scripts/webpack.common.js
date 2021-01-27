const { VueLoaderPlugin } = require('vue-loader')
const { pathResolve } = require('./utils')

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loaders: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000,
              name: () => 'static/img/[name].[hash:7].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: () => 'static/media/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 8000,
          name: () => 'static/fonts/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.svg/,
        loader: 'svg-sprite-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': pathResolve('../src'),
      '@examples': pathResolve('../examples/src/')
    },
    extensions: ['*', '.js', '.vue', '.json']
  }
}
