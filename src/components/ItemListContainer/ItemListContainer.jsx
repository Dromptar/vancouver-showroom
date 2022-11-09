import {useState, useEffect, useContext } from "react";
import ItemList from "../ItemList/ItemList";
import {consultDB} from '../../assets/productsCard'
import { useParams } from "react-router-dom";
import { DarkModeContext} from "../../context/darkMode";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const {category} = useParams()

    const{darkMode, toggleDarkMode} = useContext(DarkModeContext);
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
      <div className= {darkMode ? "row darkMode": "row"}>
        <button className={darkMode ? "btn btn-light" : "btn btn-dark" } onClick={() =>toggleDarkMode()} >Cambiar modo</button>
        {products}
      </div>  
    )
}

export default ItemListContainer;
