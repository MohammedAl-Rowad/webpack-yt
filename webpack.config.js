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
}
