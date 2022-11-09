import {useContext, useState, createContext} from 'react'

const CartContext = createContext([]);

const CartContextProvider = (props) => {
    const [cart, setCart] = useState([]);

    const isInCart = () => {
        return cart.find( prod => prod.id === id)
    }

    const addItem = (item, quantity) => {

        }
        if(isInCart(newItem.id)) {
            const index = cart.findIndex(prod => prod.id);
            const aux = [...cart];
            aux[index].quan = quantity;  
            setCart(aux); 
        } else {
            const newItem = {
                ...item,
                quan: quantity
            }
            setCart([...cart, newItem])
        }
}