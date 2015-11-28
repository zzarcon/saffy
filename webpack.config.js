module.exports = {
  entry: './saffy.js',
  output: {
    publicPath: 'http://localhost:8090/assets',
    path: './dist',
    filename: 'saffy.js',
    libraryTarget: 'umd',
    library: 'saffy'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js']
  }
};