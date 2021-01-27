const path = require('path')

const pathResolve = dir => path.resolve(__dirname, dir)

const genePath = dir => path.join(__dirname, '..', dir)

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  pathResolve,
  genePath,
  isProduction
}
