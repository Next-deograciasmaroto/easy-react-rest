/*
*	Main app entry.
*
*/

import React from 'react'
import ReactDOM from 'react-dom'

// Material UI
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import AppBar from 'material-ui/AppBar'

// Custom components
import CompaniesList from './companies/companiesList.js'


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const Main = () => (
  <MuiThemeProvider>
    <div className="main-app">
      <AppBar
        title="My awesome company manager"
        showMenuIconButton={false}
      />
      <CompaniesList />
    </div>
  </MuiThemeProvider>
)

document.addEventListener('DOMContentLoaded', function() {

  ReactDOM.render(
    <Main />,
    document.getElementById('mount')
  )

})
