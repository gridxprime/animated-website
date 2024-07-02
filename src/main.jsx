import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Routes, Route, BrowserRouter } from 'react-router-dom'
import Links from './pages/Links.jsx'
import Contacts from './pages/Contacts.jsx'
import About from './pages/About.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<App />}></Route>
          <Route path='/links' element={<Links></Links>}></Route>
          <Route path='/contacts' element={<Contacts></Contacts>}></Route>
          <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
