import React, { useState, useEffect } from 'react'

// pages
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage';
import Products from './pages/Products';

function App() {
  const [page, setPage] = useState('home'); 

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pageParam = params.get('page');
    if (pageParam) {
      setPage(pageParam.toLowerCase());
    } else {
      setPage('home'); 
    }
  }, []);

  return (
    <div>
      {page === 'home' && <Home />}
      {page === 'products' && <Products />}
      {page === 'error' && <ErrorPage />}
    </div>
  )
}

export default App
