import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage';
import Products from './pages/Products';
import FAQs from './pages/FAQs';
import Contacts from './pages/Contacts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App
