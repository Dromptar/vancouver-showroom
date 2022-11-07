import {Link} from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    return (
        <ul className="navbar-nav me-auto">
            <li className="nav-item"> 
                <Link className='nav-link' to="/cart">
                  <span id="cart"><FaShoppingCart /></span>
                </Link>
            </li>
        </ul>
    )
}

export default CartWidget;
