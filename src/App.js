import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home, Learn } from './screens'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<Home/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/learn' element={<Learn/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
