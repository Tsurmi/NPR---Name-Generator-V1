import PropTypes from 'prop-types'

export const hostData = PropTypes.shape({
  isLoaded: PropTypes.bool.isRequired,
  addHost: PropTypes.func.isRequired

}).isRequired
