import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    const {getItemQuantity} = useContext(CartContext);
    return (
        <ul className="navbar-nav me-auto cart-icone">
            <li className="nav-item"> 
                <Link className='nav-link' to="/cart">
                  <span id="cart"><FaShoppingCart /></span>
                  <p>{getItemQuantity()}</p>
                </Link>
            </li>
        </ul>
    )
}

export default CartWidget;
