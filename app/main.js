/*
*	Main app entry.
*
*/

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import AppBar from 'material-ui/AppBar'

// Custom components
import CompaniesContainer from './companies/companiesContainer.js'
import CompanyElement from './companies/companyElement.js'


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const Main = () => (
  <MuiThemeProvider>
    <div className="main-app">
      <AppBar
        title="My awesome company manager"
        showMenuIconButton={false}
      />
      <CompaniesContainer />
    </div>
  </MuiThemeProvider>
)



document.addEventListener('DOMContentLoaded', function() {

  ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={Main} />
      <Route path="/companies/:id" component={CompanyElement} />
    </Router>,
    document.getElementById('mount')
  )

})
