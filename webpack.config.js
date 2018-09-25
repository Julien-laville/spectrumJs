const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: ['./demo.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'spectrum.js'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({})
    ]
  }
}
