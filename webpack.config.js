const { resolve, join } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries')


const base = join(__dirname, 'src')
const jsSrc = join(base, 'js')
const scssSrc = join(base, 'scss')

module.exports = {
  entry: {
    main: join(jsSrc, 'main.js'),
    aboutPage: join(jsSrc, 'pages', 'aboutPage.js'),
    mainCSS: join(scssSrc, 'main.scss') 
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/,
        use: [
          // Creates `style` nodes from JS strings
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      }
    ],
  },
  plugins: [
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      filename: '[name].css'
    }),
  ]
}
