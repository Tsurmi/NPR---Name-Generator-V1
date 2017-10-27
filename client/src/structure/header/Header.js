import React from 'react'
import NavItem from './NavItem'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const propTypes = {
  classes: PropTypes.object.isRequired
}

const styles = {
  masterDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  navLinksLinks: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '15%'
  }
}

const enhancer = injectSheet(styles)

const Header = props => {
  const {classes} = props
  return (
    <header className={classes.masterDiv}>
      <nav className={classes.navLinksLinks}>
        <NavItem to='/'>Home</NavItem>
        <NavItem to='/Generator'>NPR Generator</NavItem>
        <NavItem to='/AddPerson'>Add Person</NavItem>
      </nav>
    </header>
  )
}

Header.propTypes = propTypes

export default enhancer(Header)
