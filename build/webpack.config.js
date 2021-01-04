const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: {
    index: path.join(__dirname, "../src/index.js") // 入口文件
  }, 
  output: {
    path: path.join( __dirname, "../dist"), // 打包后的文件存放在dist文件夹
    publicPath: '../dist/', // 设置公共路径
    filename: "v-text-ellipsis.js", // 打包后输出文件
    libraryTarget: 'umd'
  },
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
        include: path.resolve(__dirname, '../src'),
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}