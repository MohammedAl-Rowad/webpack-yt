const { resolve, join } = require('path')

module.exports = {
  entry: {
    main: join(__dirname, 'src', 'js', 'main.js')
  },
  output: {
    filename: 'main.js',
    path: resolve(__dirname, 'dist'),
  },
}
