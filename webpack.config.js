const path  = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
  },

  devServer: {
    overlay: true
  },
  devTool: 'source-map',
  watch: true,

  modules: {
    rules: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        // exclude: 
      }
    ]
  }
}