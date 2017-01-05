/*
*	Main app entry.
*
*/

import React from 'react'
import ReactDOM from 'react-dom'

const Main = () => (
  <div> Main app </div>
)

document.addEventListener('DOMContentLoaded', function() {

  ReactDOM.render(
    <Main />,
    document.getElementById('mount')
  )
})
