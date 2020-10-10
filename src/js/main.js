import { compose } from 'underscore'
import regeneratorRuntime from 'regenerator-runtime'
import Home from './react/home'
import React from 'react'
import ReactDOM from 'react-dom'
// import '../scss/main.scss'

const func = () => {
  console.log('rowadz')
}
const func2 = () => {
  console.log('rowad 02')
}

const allFuncs = compose(func, func2)

allFuncs()

const getData = async () => {
  const data = await (
    await fetch('https://jsonplaceholder.typicode.com/posts/1')
  ).json()
  console.log(data)
}

getData()

ReactDOM.render(<Home />, document.getElementById('container'))
