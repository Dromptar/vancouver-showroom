import {useContext, useState, createContext} from 'react'

const CartContext = createContext([]);

const CartContextProvider = (props) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.find( prod => prod.id === id)
    }

    const addItem = (item, quantity) => {

        if(isInCart(item.id)) {
            const index = cart.findIndex(prod => prod.id === item.id);
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

        const emptyCart = () => {
            return setCart([])
        }

        const removeItem = (id) => {
            return setCart(cart.filter(prod => prod.id !== id))
        }

        const getItemQuantity = () => {
            return cart.reduce((acum, prod) => acum += prod.quan, 0)
        }

        const totalPrice = () => {
            return cart.reduce((acum, prod) => acum += (prod.quan * prod.precio), 0)
        }
        
        console.log(cart);

        return (
            <CartContext.Provider value = {{cart, isInCart, addItem, emptyCart, removeItem, getItemQuantity, totalPrice}}>
                {props.children}
            </CartContext.Provider>
        )
}

export {CartContextProvider, CartContext}