import React from 'react'
import { browserHistory } from 'react-router'

import FlatButton from 'material-ui/FlatButton'


// Companies List component
class ShowCompany extends React.Component {
  constructor() {
    super()
  }

  goTo(id) {
    console.log(id);
    browserHistory.push(`/companies/${id}`)
  }

  render() {
    return (
      <FlatButton onClick={this.goTo(this.props.to)} label="More info" />
    )
  }
}

export default ShowCompany
