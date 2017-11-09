import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import injectSheet from 'react-jss'

const propTypes =  {
  classes: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired
}

const styles = {
  hostItem: {
    background: '#ecf0f1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    width: '100%',
    margin: 25,
    borderRadius: '50px 50px 50px 50px',
    paddingBottom: '20px'
  },
  thumbnail: {
    width: '100%',
    borderRadius: '50px 50px 0 0'
  }
}

const enhancer = injectSheet(styles)

const HostHero = props => {
  const { classes } = props
  return (
    <div className={classes.hostItem}>
      <img className={classes.thumbnail} src={props.drink.image} />
    </div>
  )
}

HostHero.propTypes = propTypes

export default enhancer(HostHero)
