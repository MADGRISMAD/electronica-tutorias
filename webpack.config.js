const path = require('path');
module.exports = {
    entry: './app.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.bundle.js'
    },
    mode: 'development',
    target: 'node',
    module: {
      rules: [
        {
          test: /\.node$/,
          use: ['raw-loader']
        }
      ]
    }
  };