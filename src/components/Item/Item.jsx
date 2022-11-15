import { Link } from "react-router-dom";

const Item = ({prod}) => {
    return (
      
        <div className="card border-success mb-3" style={{maxWidth: '20rem'}}>
            <div className="card-header">{prod.marca}</div>
            <img src={`../img/${prod.img}`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title">{prod.nombre}</h4>
                <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                <button className="btn btn-dark"><Link className="nav-link" to={`/product/${prod.id}`}>Ver producto</Link></button>
            </div>
        </div>
    );
}

export default Item;
