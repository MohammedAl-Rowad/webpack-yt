import { compose } from 'underscore'
// import '../scss/main.scss'

const func = () => {
  alert('rowadz')
}
const func2 = () => {
  alert('rowad 02')
}

const allFuncs = compose(func, func2)

allFuncs()
