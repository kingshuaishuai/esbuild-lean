import React from 'react'
import { renderToString } from 'react-dom/server'

const Greet = () => {
  return <div>hello world</div>
}

const renderStr = renderToString(<Greet />)

console.log(renderStr)
