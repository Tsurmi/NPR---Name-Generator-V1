import React from 'react'
import {Route} from 'react-router-dom'
import Generator from '../components/pages/Generator'
import AddPersonContainer from '../components/pages/admin/AddPersonContainer'
import AllHost from '../components/pages/admin/AllHost'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const propTypes = {
  hostData: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}

const styles = {
  main: {
    marginTop: 0
  }
}

const enhancer = injectSheet(styles)

const Main = ({hostData, classes}) => {
  return (
    <div className={classes.main}>
      <Route path='/Generator' render={() => <Generator />} />
      <Route path='/AddHost' render={() => <AddPersonContainer hostData={hostData} />} />
      <Route path='/AllHost' render={() => <AllHost hostData={hostData} />} />
    </div>
  )
}

Main.propTypes = propTypes

export default enhancer(Main)
