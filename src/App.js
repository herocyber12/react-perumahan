import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Griyasuryaresidence from './pages/Griyasuryaresidence';
import Skyviewsemarang from './pages/Skyviewsemarang';
import Home from './pages/Home';
import './assets/vendor/slick/slick/slick-theme.css';
import './assets/vendor/slick/slick/slick.css';
import './assets/vendor/slick/slick/slick.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/sky_view' element={<Skyviewsemarang/>}/>
          <Route path='/griya_surya' element={<Griyasuryaresidence/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
library.add(fas,fab)