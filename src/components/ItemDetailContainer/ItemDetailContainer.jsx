import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {consultDB } from '../../assets/productsCard';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);
    const {id} = useParams()


    useEffect(() => {
        consultDB('../json/products.json').then(productos => {
            const prod = productos.find(productoArray => productoArray.id === parseInt(id));
            console.log(prod);
            setProducto(prod);
        })
    }, []);

    return (
        <div>
            <div className=' card mb-3 container itemDetail'>
                <ItemDetail producto={producto}/>
            </div>
        </div> 
    );
}

export default ItemDetailContainer;
