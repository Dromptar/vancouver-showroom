import {getFirestore, collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc} from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-2022-c1cf8.firebaseapp.com",
  projectId: "react-2022-c1cf8",
  storageBucket: "react-2022-c1cf8.appspot.com",
  messagingSenderId: "357931228060",
  appId: "1:357931228060:web:6b5eaf14a9df060b880659"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

/* -------------- Create Read Update Delete METHOD --------------- */

const cargarBDD = async () => {
    const promise = await fetch('./json/products.json');
    const products = await promise.json()
    products.forEach(async (prod) => {
        await addDoc(collection(db, "products"), {
            nombre: prod.nombre,
            marca: prod.marca,
            modelo: prod.modelo,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })
    })
}

const getProductos = async() => {
    const productos = await getDocs(collection(db, "products"))
    const items = productos.docs.map(prod => {return {...prod.data(), id: prod.id}})

    return items
}

const getProducto = async(id) => {
    const prod = await getDoc(doc(db, "products", id))
    let item;
    if(prod.data()) {
        const item = {...prod.data(), id: prod.id}
    } else {
        item = "Producto no encontrado";
    }
    
    return item
}

const createProducto = async (objProducto) => {
    const estado = await addDoc(collection(db, "products"), {
        nombre: objProducto.nombre,
        marca: objProducto.marca,
        modelo: objProducto.modelo,
        idCategoria: objProducto.idCategoria,
        stock: objProducto.stock,
        precio: objProducto.precio,
        img: objProducto.img
    })

    return estado
}

const updateProducto = async(id, info) => {
    const estado = await updateDoc(doc(db, "products",id), info)
    return estado
}

const deleteProducto = async(id) => {
    const estado = await deleteDoc(doc(db,"products", id))
    return estado
}


//CREATE AND READ ORDENES DE COMPRA

const createOrdenCompra = async (cliente, preTotal, fecha) => {
    const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
        nombre: cliente.nombre,
        apellido: cliente.apellido,
        email: cliente.email,
        dni: cliente.dni,
        direccion: cliente.direccion,
        fecha: fecha,
        precioTotal: preTotal
    })

    return ordenCompra
}

const getOrdenCompra = async(id) => {
    const item = await getDoc(doc(db, "ordenCompra", id))
    const ordenCompra = {...item.data(), id: item.id}
    return ordenCompra
}

export {cargarBDD, getProductos, getProducto, createProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra}