const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Entry point remains the same
  entry: './src/public/main.js',

  // Output configuration remains the same
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    publicPath: '/',
    clean: true,
  },

  // Mode remains the same
  mode: 'development',

  // Webpack dev server configuration (optional)
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Corrected from 'contentBase' to 'static.directory'
    },
    compress: true, // Automatically opens your default web browser
    port: 8080, // Specifies the port number on which to listen for requests
    hot: true, // Enables Hot Module Replacement without page refresh
    client: {
      overlay: false, // Disables the overlay
    },
    open: {
      app: {
        name: 'google chrome',
      },
    },
  },

  // Module rules for handling different asset types
  module: {
    rules: [
      {
        test: /\.html$/, // Html files
        use: ['html-loader'],
      },
      {
        test: /\.css$/, // Css files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp)$/, // Combines all image types into one rule
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[hash][ext][query]', // Stores images in an 'images' directory with cache-busting hashes
        },
      },
      {
        test: /\.pdf$/, // PDF files
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'docs/', // Where to put documents/PDFs
              name: '[name].[hash].[ext]',
            },
          },
        ],
      },
      // Add other file types here as needed
    ],
  },
  plugins: [
        new HtmlWebpackPlugin({
            template: './src/public/index.html', // Path to your template
            filename: 'index.html' // Output file relative to dist/
        })
    ]
};
