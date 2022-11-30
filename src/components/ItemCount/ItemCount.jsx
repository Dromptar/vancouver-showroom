import {useState} from 'react';

const ItemCount = ({stock, onAdd}) => {
    const [contador, setContador] = useState(1) //valor inicial

    const agregarAlCarrito = () => {
        onAdd(contador)
    }

    const incrementar = () => contador < stock && setContador(contador + 1)

    const decrementar = () => contador > 1 && setContador(contador - 1)
    
    return (
        <>
            <button onClick={decrementar} className='btn btn-dark botItem'><i className="fas fa-minus"></i></button>
                    {contador}
            <button onClick={incrementar} className='btn btn-dark botItem'><i className="fas fa-plus"></i></button>
            <button id='addToCart' className="btn btn-dark" onClick={agregarAlCarrito}><i className="fas fa-cart-plus"></i></button>
        </>
    );
}

export default ItemCount;