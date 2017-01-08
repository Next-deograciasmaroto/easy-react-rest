import React from 'react'

import CompanyListItem from './companyListItem.js'

// Companies List component
class CompaniesList extends React.Component {
  constructor() {
    super()
  }

  renderCompany(company) {
    return (
      <CompanyListItem key={company.id} company={company} />
    )
  }

  render() {
    return (
      <div className='companies-list'>
        {this.props.companies.map( (company) => this.renderCompany(company) )}
      </div>
    )
  }
}

CompaniesList.propTypes = {
  companies: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
}

export default CompaniesList
