import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../components/pages/Home'
import Generator from '../components/pages/Generator'
import AddPersonContainer from '../components/pages/admin/AddPersonContainer'

const Main = () => {
  return (
    <div>
      <Route path='/'exact component={Home} />
      <Route path='/Generator' render={() => <Generator />} />
      <Route path='/AddPerson' render={() => <AddPersonContainer />} />
    </div>
  )
}

export default Main
