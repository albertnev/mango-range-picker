const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'range-picker.bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(scss|sass|css|less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: { localIdentName: '[local]___[hash:base64:5]' },
              sourceMap: true,
              importLoaders: 1,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.md$/,
        use: 'raw-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
  },
  devtool: 'inline-source-map',
};
