import React from 'react';
import  ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import "./fonts/EB_Garamond/EBGaramond-Italic-VariableFont_wght.ttf";
import "./fonts/Helvetica_Font_Family/Helvetica\ 400.ttf";
import './index.css';


import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
       <App />
    </BrowserRouter>
);