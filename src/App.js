import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import {Navbar, Feed, VeadeoDetail, ChennelDetail, SearchFeed} from './components'


const App = () => {
 return (
  <div>
      <BrowserRouter>
  <Box sx={{backgroundColor: '#000'}}>
    <Navbar /> 
<Routes>
  <Route path="/" exact element={<Feed/>}/>
  <Route path="/video/:id" exact element={<VeadeoDetail/>}/>
  <Route path="/channel/:id" exact element={<ChennelDetail/>}/>
  <Route path="/search/:serchTerm" exact element={<SearchFeed/>}/>
</Routes>
  </Box>
  </BrowserRouter>
  </div>
 )
  }

export default App