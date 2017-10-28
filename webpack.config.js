var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: {
    js: "./src/index.js",
  },

  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js[x]$/,
        exclude: /node_modules/,
        enforce: "pre",
        use: [
          {
            loader: 'eslint-loader',
            options: { configFile: './.eslintrc' },
          },
        ],
      }, {
        loader: 'babel-loader',
        exclude: /node_modules/,
        test: /\.js[x]?$/,
        options: {
          cacheDirectory: true,
          plugins: [
            'react-hot-loader/babel'
          ]
        },
      }, {
        test: /\.css$/,
        use: ["file-loader?name=[name].[ext]"]
      },
    ],
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  })]
};
