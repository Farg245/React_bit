import React from 'react';
import{BrowserRouter ,Route, Routes} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Home from "./pages/Home";
import Test from "./pages/Test";
import './style.scss'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
    <Routes>
        <Route index element={<Home />} />
        <Route path='/:name' element={< Test/>} />
    </Routes>
  </BrowserRouter>

);


