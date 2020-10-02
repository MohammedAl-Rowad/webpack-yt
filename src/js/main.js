import { compose } from 'underscore'
const func = () => {
  alert('rowadz')
}
const func2 = () => {
  alert('rowad 02')
}

const allFuncs = compose(func, func2)

allFuncs()
