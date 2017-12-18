const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve('src', 'index.ts'),
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src', 'index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              useCache: true,
              useBabel: true,
              configFileName: 'tsconfig.build.json',
              babelCore: '@babel/core',
              babelOptions: {
                presets: [
                  ['@babel/preset-env', {modules: false}],
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
