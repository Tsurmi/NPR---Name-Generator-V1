import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}

const NavItem = (props) => {
  return (
    <div>
      <NavLink to={props.to}>{props.children}</NavLink>
    </div>
  )
}

NavItem.propTypes = propTypes

export default NavItem
