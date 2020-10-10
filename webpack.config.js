const { resolve, join } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries')


const base = join(__dirname, 'src')
const jsSrc = join(base, 'js')
const scssSrc = join(base, 'scss')

module.exports = {
  entry: {
    'js/main': join(jsSrc, 'main.js'),
    'js/aboutPage': join(jsSrc, 'pages', 'aboutPage.js'),
    'css/main': join(scssSrc, 'main.scss') 
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
      },
      {
        test: /\.*js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            // @babel/preset-env is a smart preset that allows you to use the latest JavaScript without 
            // needing to micromanage which syntax transforms (and optionally, browser polyfills) are
            // needed by your target environment(s). This both makes your life easier and JavaScript bundles smaller!
            presets: ['@babel/preset-env']
          }
        }
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
