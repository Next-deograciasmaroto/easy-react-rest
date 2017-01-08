import React from 'react'
import { Link } from 'react-router'


// Companies List Item component
class CompanyListItem extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div
        className='company'
        style={{
          padding: '20px'
        }}>
          <h1 style={{
            fontSize: '28px'
          }}>{this.props.company.name}</h1>
          <p>Employees: {this.props.company.employees}, Divisions: {this.props.company.divisions}</p>
          <Link to={`/companies/${this.props.company.id}`}>More info</Link>
      </div>
    )
  }
}

export default CompanyListItem
