import React from 'react'
// Axios (nice AJAX)
import axios from 'axios'

import * as ApiConstants from '../constants/apiConstants.js'


import {Card, CardHeader} from 'material-ui/Card'

import CompaniesList from './companiesList.js'

// Companies List component
class CompaniesContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      companies: []
    }
  }

  componentDidMount() {
    axios.get(ApiConstants.GET_COMPANIES).then( (result) => {
      this.setState( {companies: result.data} )
    })
  }

  render() {
    return (
      <Card>
        <CardHeader
          title="Companies List"
        />
        <CompaniesList companies={this.state.companies} />
      </Card>
    )
  }
}

export default CompaniesContainer
