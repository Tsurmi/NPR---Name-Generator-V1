import React from 'react'
import Layout from './structure/Layout'
import HostDataProvider from './HostDataProvider'
import {BrowserRouter} from 'react-router-dom'

const App = () =>
  <BrowserRouter>
    <HostDataProvider>
      <Layout />
    </HostDataProvider>
  </BrowserRouter>

export default App
