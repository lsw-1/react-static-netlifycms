import React from 'react'
import { Router } from 'react-static'
import Routes from 'react-static-routes'
import { hot } from 'react-hot-loader'
import { Navbar } from './components'

import './app.css'

const App = () => (
  <Router>
    <div>
      <Navbar />
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)

export default hot(module)(App)
