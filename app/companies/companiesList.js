import React from 'react'

import CompanyItem from './companyItem.js'

// Companies List component
class CompaniesList extends React.Component {
  constructor() {
    super()
  }

  renderCompany(company) {
    return (
      <CompanyItem key={company.id} company={company} />
    )
  }

  render() {
    return (
      <div>
        {this.props.companies.map( (company) => this.renderCompany(company) )}
      </div>
    )
  }
}

CompaniesList.propTypes = {
  companies: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
}

export default CompaniesList
