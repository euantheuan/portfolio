import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './App_m.css'
import Main from './pages/Main';
import Design from './pages/Design';
import WebDev from './pages/WebDev'
import Contact from './pages/Contact';
import Skills from './components/Skills';

const App = () => {
    return (
        <div className='wrapper'>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/designportfolio' element={<Design />} />
                <Route path='/webdevportfolio' element={<WebDev />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
    )
}

export default App