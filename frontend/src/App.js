import React from 'react';

import { Route, Routes} from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import Home from './pages/Home'
import Harmattan from './pages/Harmattan';
import Collection from './pages/Collection';
import About from './pages/About';



const App = () => {
  return(
    <Box width="400px" sx={{width: {xl : '1488px'}}}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/harmattan" element={<Harmattan/>}/>
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Box>

  )
}


export default App;



