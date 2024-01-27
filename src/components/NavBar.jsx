import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
       <div className="container mt-2 text-dark">
        <div className="row d-flex justify-content-between ">
        <div><Link to='/' ><h2>Products</h2></Link></div>
       <div className='mr-1'> <Link to='Cart'><h2>Cart <i className="fa-solid fa-cart-shopping"></i></h2></Link></div>
        </div>
       </div>
    </div>
  )
}

export default NavBar