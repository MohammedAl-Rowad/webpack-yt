const { resolve, join } = require('path')

const jsSrc = join(__dirname, 'src', 'js')

module.exports = {
  entry: {
    main: join(jsSrc, 'main.js'),
    aboutPage: join(jsSrc, 'pages', 'aboutPage.js'),
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      }
    ],
  },
}
