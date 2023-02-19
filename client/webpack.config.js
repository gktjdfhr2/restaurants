const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry point and output when build.
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },

  // dev server
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
    client: {
      logging: 'error',
      overlay: true,
    },
  },

  // no babel. use swc-loader
  module: {
    rules: [
      {
        test: /(\.tsx)|(\.ts)/,
        exclude: /(node_modules)/,
        use: {
          loader: 'swc-loader',
        },
      },
    ],
  },

  // html-webpack-plugin
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],

  // resolve
  resolve: {
    extensions: ['.tsx', '.ts', '...'],
    alias: {
      '@pages': path.resolve(__dirname, './src/pages'),
    }
    // modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  }
}