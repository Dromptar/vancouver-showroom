import './navbar.css';
import Dropdown from './Dropdown/Dropdown'
import SearchForm from '../SearchForm/SearchForm'
import Title from './Sections/Title'
import CartWidget from '../CartWidget/CartWidget';
// import logo from '../../../img/logoprov.jpg'


const Navbar = () => {
    return (
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" ><img src="./img/logoprov.jpg" id="logo" alt="logo" /></a>
          {/* <a className="navbar-brand" href="#" ><img src={logo} id="logo" alt="logo" /></a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <Title/>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Inicio
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">About</a>
              </li>
            <Dropdown dropdown={"Productos"}/>
            </ul>
            <CartWidget/>
            <SearchForm searchForm={"Buscar una tienda"}/>
          </div>
        </div>
      </nav>                
      
    )
  }

  export default Navbar
