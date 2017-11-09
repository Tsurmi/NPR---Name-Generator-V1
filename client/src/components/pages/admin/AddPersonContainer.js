import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import {hostData} from '../../../lib/propTypes'
import AddPersonForm from './AddPersonForm'

const propTypes = {
  hostData
}

class AddPersonContainer extends Component {
  static PropTypes = {
    hostData: PropTypes.object.isRequired
  }
  state = {
    name: undefined,
    image: undefined
  }

  onNameChanged = (event) => this.setState({ name: event.target.value })

  onImageChanged = (event) => this.setState({ image: event.target.value })

  onSubmit = (event) => {
    event.preventDefault()
    this.props.hostData.addHost(this.state)
    alert(`Congrats, you have added a ${this.state.name}`)
  }

  render () {
    return (
      <AddPersonForm
        {...this.state}
        onNameChanged={this.onNameChanged}
        onImageChanged={this.onImageChanged}
        onSubmit={this.onSubmit}
      />
    )
  }
}
AddPersonContainer.propTypes = propTypes

export default withRouter(AddPersonContainer)
