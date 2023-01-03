const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              // name: '[contenthash].[ext]',
              // name(resourcePath, resourceQuery) {
              //   // `resourcePath` - `/absolute/path/to/file.js`
              //   // `resourceQuery` - `?foo=bar`
    
              //   if (process.env.NODE_ENV === 'development') {
              //     return '[path][name].[ext]';
              //   }
              //   return '[contenthash].[ext]';
              // },
              outputPath: 'images',
              name: '[name].[ext]',
              // publicPath: 'assets',
            },
          },
        ],
      },
    ],
  },
}