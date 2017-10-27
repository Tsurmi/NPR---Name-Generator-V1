import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import AddPersonForm from './AddPersonForm'

class AddPersonContainer extends Component {
  static PropTypes = {
  }
  state = {
    name: undefined
  }

  onNameChanged = (event) => this.setState({ name: event.target.value })

  render () {
    return (
      <AddPersonForm
        {...this.state}
        onNameChanged={this.onNameChanged}
      />
    )
  }
}

export default withRouter(AddPersonContainer)
