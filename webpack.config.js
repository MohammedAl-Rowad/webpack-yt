const { resolve, join } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const base = join(__dirname, 'src')
const jsSrc = join(base, 'js')
const scssSrc = join(base, 'scss')

module.exports = {
  // watch: true, use `-- watch` in the npm scripts
  entry: {
    'js/main': join(jsSrc, 'main.js'),
    'js/aboutPage': join(jsSrc, 'pages', 'aboutPage.js'),
    'css/main': join(scssSrc, 'main.scss'),
    // 'react/home': join(jsSrc, 'react', 'home.js')
  },
  devServer: {
    compress: true,
    port: 9000
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
          'style-loader',
          // MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.*(js|jsx)$/,
        // https://stackoverflow.com/questions/54156617/why-would-we-exclude-node-modules-when-using-babel-loader
        // In short, transpiling is an expensive process and many projects have thousands (if not hundreds of thousands)
        // of lines of code imported in that babel would need to run over. Your node_modules should already be runnable without transpiling
        // as said already and there are simple ways to exclude your node_modules but transpile any code that needs it.
        // See https://github.com/babel/babel-loader/issues/171.
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            // @babel/preset-env is a smart preset that allows you to use the latest JavaScript without
            // needing to micromanage which syntax transforms (and optionally, browser polyfills) are
            // needed by your target environment(s). This both makes your life easier and JavaScript bundles smaller!
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  plugins: [
    new FixStyleOnlyEntriesPlugin(),
    // new MiniCssExtractPlugin({
    //   // Options similar to the same options in webpackOptions.output
    //   filename: '[name].css'
    // }),
    new HtmlWebpackPlugin({
      template: join(__dirname, 'src', 'index.html'),
    }),
  ],
}
