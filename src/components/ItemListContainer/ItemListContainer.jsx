import {useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import {consultDB} from '../../assets/productsCard'
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const {category} = useParams()

    useEffect(() => {    
      if(category) {
        consultDB('../json/products.json').then(productos => {
        const productsList = productos.filter( prod => prod.idCategoria ===parseInt(category))
        const productsCard = ItemList({productsList});
        setProducts(productsCard);
        })
      } else {
          consultDB('../json/products.json').then(productsList => {
          const productsCard = ItemList({productsList});
          setProducts(productsCard);
          })
        }
  } , [category]);

    return (
      <div className="row">
        {products}
      </div>  
    );
}

export default ItemListContainer;
