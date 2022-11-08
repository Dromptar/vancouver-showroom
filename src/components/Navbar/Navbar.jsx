import './navbar.css';
import {Link} from 'react-router-dom'
import Dropdown from './Dropdown/Dropdown';
import CartWidget from '../CartWidget/CartWidget';
import Title from '../Navbar/Sections/Title'


const Navbar = () => {
    return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" ><img src="../img/logoprov.jpg" id="logo" alt="logo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className='nav-link' to="/">
                  <button className='btn btn-primary'>Inicio</button>
                </Link>
                  <span className="visually-hidden">(current)</span>
              </li>
            <Dropdown dropdown={"Remeras"}/>
            </ul>
            <Title/>
            <CartWidget/>
          </div>
        </div>
      </nav>                
                
       
        
    )
  }

  export default Navbar

