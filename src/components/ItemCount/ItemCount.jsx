import {useState} from 'react';

const ItemCount = ({stock, onAdd}) => {
    const [contador, setContador] = useState(1)
    
    const agregarAlCarrito = () => {
        onAdd(contador);
    }

    const incrementar = () => contador < stock && setContador(contador + 1);
    const decrementar = () => contador > 1 && setContador(contador - 1);

    return (
        <>
            <button onClick={decrementar} id="boton2" className='btn btn-light'>-</button>
                {contador}
            <button  onClick={incrementar}id="boton1" className='btn btn-dark'>+</button>
            <button className='btn btn-dark' onClick={agregarAlCarrito}>Agregar al carrito</button>    
        </>
    );
}

export default ItemCount;