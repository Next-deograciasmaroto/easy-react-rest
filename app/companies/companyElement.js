import React from 'react'
import * as ApiConstants from '../constants/apiConstants.js'
import axios from 'axios'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

import {Card, CardHeader} from 'material-ui/Card'

import DivisionsList from '../divisions/divisionsList.js'


// Companies List component
class CompanyElement extends React.Component {
  constructor() {
    super()
    this.state = {
      divisions: []
    }
  }

  componentDidMount() {
    axios.get(`${ApiConstants.GET_COMPANIES}?id=${this.props.routeParams.id}`).then( (result) => {
      this.setState( {divisions: result.data} )
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="main-app">
          <AppBar
            title="My awesome company manager"
            showMenuIconButton={false}
          />
          <Card>
            <CardHeader
              title="Company divisions"
            />
            <DivisionsList divisions={this.state.divisions} />
          </Card>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default CompanyElement
