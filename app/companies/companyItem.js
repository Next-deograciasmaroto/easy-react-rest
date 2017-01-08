import React from 'react'

// Companies List component
class CompanyItem extends React.Component {
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
      </div>
    )
  }
}

export default CompanyItem
