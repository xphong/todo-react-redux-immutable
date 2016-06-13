module.exports = {
  entry: './src/app.js',
  output: {
    path: './build/',
    publicPath: 'http://localhost:8080/',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
