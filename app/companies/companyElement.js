import React from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'


// Companies List component
class CompanyElement extends React.Component {
  constructor() {
    super()
    this.state = {
      divisions: []
    }
  }

  componentDidMount() {
    console.log(this.props.routeParams.id);
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
          hasdsaiuhdsa
        </div>
      </MuiThemeProvider>
    )
  }
}

export default CompanyElement
