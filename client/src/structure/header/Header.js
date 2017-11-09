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
    width: '15%',
    border: 'soild red'
  },
  links: {
    textDecoration: 'none',
    color: 'black',
    fontFamily: 'Merriweather'
  }
}

const enhancer = injectSheet(styles)

const Header = props => {
  const {classes} = props
  return (
    <header className={classes.masterDiv}>
      <nav className={classes.navLinksLinks}>
        <NavItem className={classes.links} to='/Generator'>Generator</NavItem>
        <NavItem className={classes.links} to='/AddHost'>Add Host</NavItem>
        <NavItem className={classes.links} to='/AllHost'>All Host</NavItem>
      </nav>
    </header>
  )
}

Header.propTypes = propTypes

export default enhancer(Header)
