const path = require('path');

module.exports = {
  // Entry point of your application
  entry: './src/public/index.js', // Adjust this path to where your main JavaScript file is located

  // Output configuration for the bundled file
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle file name
  },

  // Mode can be 'development' or 'production'
  mode: 'development',
};
