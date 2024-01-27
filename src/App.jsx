import React from 'react'
import Products from './components/Products'
import Cart from './components/Cart'
import CartContext from './utils/CartContextComponent'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import NavBar from './components/NavBar'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<CartContext><Products/></CartContext>} />
        <Route path='/Cart' element={<CartContext><Cart/></CartContext>} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App