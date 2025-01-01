
// pages
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage';
import Products from './pages/Products';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {


  return (
    <>
 
    <Router>
      <Routes>
        
      <Route path="/" element={<Home />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/products" element={<Products />} />


      </Routes>
    </Router>
    </>
  )
}

export default App
