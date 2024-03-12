const path = require('path');

module.exports = {
  // Entry point remains the same
  entry: './src/public/main.js',

  // Output configuration remains the same
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  // Mode remains the same
  mode: 'development',

  // Webpack dev server configuration (optional)
  devServer: {
    contentBase: './dist',
    open: true,
  },

  // Module rules for handling different asset types
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png)$/, // Image files
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images/', // Where to put images
            },
          },
        ],
      },
      {
        test: /\.pdf$/, // PDF files
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'docs/', // Where to put documents/PDFs
            },
          },
        ],
      },
      // Add other file types here as needed
    ],
  },
};
