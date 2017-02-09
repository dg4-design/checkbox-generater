module.exports = {
  entry: ['babel-polyfill', './js/src/app.js'],
  output: {
    path: 'js/dist',
    filename: '[name].js'
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/,
      query: {presets: ["es2015"]}
    }]
  },
  devtool: 'source-map'
};
