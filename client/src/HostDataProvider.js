import React, {Component} from 'react'
import * as ServerApi from './lib/serverApi'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.element.isRequired
}

class HostDataProvider extends Component {
  state = {
    isLoaded: false,
    host: null
  }

methods = {
  getAllHosts: () =>
    ServerApi.getAllHosts()
      .then(hosts => {
        this.setState({
          isLoaded: true,
          hosts: hosts
        })
      }),

  addHost: (newHost) =>
    ServerApi.addHost(newHost)
      .then(() => {
        this.methods.getAllHosts()
      }),

  deleteHost: (drinkId) =>
    ServerApi.deleteHost(drinkId)
      .then(() => {
        this.methods.getAllHosts()
      }),
  getRandomHost: () =>
    ServerApi.getRandomHost()
      .then((res) => {
        console.log('random host response', res)
        this.setState({
          isLoaded: true,
          randomHost: res
        })
      }),

  getHostById: (hostId) => {
    ServerApi.getHostById(hostId)
      .then((host) => {
        this.setState({
          host: host
        })
      })
  },

  updateHost: (hostId, host) =>
    ServerApi.updateHost(hostId, host)
      .then(() => {
        this.methods.getAllHosts()
      })
}
componentDidMount () {
  this.methods.getAllHosts()
}

render () {
  const hostData = {
    ...this.state,
    ...this.methods
  }
  return React.cloneElement(this.props.children, {hostData})
}
}

HostDataProvider.propTypes = propTypes

export default HostDataProvider
