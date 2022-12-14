import './navbar.css';
import React from 'react';
import {Link} from 'react-router-dom'
import Dropdown from './Dropdown/Dropdown';
import CartWidget from '../CartWidget/CartWidget';
import Title from '../Navbar/Sections/Title'


const Navbar = React.memo(() => {
    return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <Link className='nav-link' to="/">
        <img src="../img/logoprov.jpg" id="logo" alt="logo" />
                </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <Title/>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className='nav-link' to="/">
                  <button className='btn btn-primary'>Inicio</button>
                </Link>
                  <span className="visually-hidden">(current)</span>
              </li>
            <Dropdown dropdown={"Remeras"}/>
            <CartWidget/>
            </ul>
            
          </div>
        </div>
      </nav>                
                
       
        
    )
  })

  export default Navbar

