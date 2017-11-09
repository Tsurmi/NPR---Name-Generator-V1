import React from 'react'
import Footer from './Footer'
import Header from './header/Header'
import Main from './Main'
import PropTypes from 'prop-types'

const propTypes = {
  hostData: PropTypes.func.isRequired
}
const Layout = ({hostData}) => {
  return (
    <div>
      <Header hostData={hostData} />
      <Main hostData={hostData} />
      <Footer />
    </div>
  )
}

Layout.propTypes = propTypes

export default Layout
