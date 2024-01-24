const path = require('path');
module.exports = {
    entry: './app.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.bundle.js'
    },
    mode: 'development',
    target: 'node',
    experiments: {
      topLevelAwait: true,
    },
    node: {
      __dirname: false,
    },
    module: {
      rules: [
        {
          test: /\.node$/,
          use: ['raw-loader']
        },
        {
            test: /\.html$/,
            use: ['html-loader']
        }
      ]
    }
  };