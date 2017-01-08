import React from 'react'

import { List, ListItem } from 'material-ui/List'

class DivisionsList extends React.Component {
  constructor() {
    super()
  }

  renderDivisionInfo(division) {
    console.log(division);
    return (
      <ListItem
        key={division.id}
        primaryText={division.name}
        secondaryText={`Employees asigned: ${division.employees}. ${division.description}`}
        disabled={true}
      >
      </ListItem>
    )
  }

  render() {
    return (
        <List>
          {this.props.divisions.map( (division) => this.renderDivisionInfo(division) )}
        </List>
      )
  }
}

DivisionsList.propTypes = {
  divisions: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
}

export default DivisionsList
