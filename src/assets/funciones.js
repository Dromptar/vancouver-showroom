import { cargarBDD, getProductos, createProducto, getProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra } from "./firebase";

// cargarBDD()

// const producto = {
//     "id": 7,
//     "idCategoria": 2,
//     "nombre": "Black one",
//     "marca": "Oni",
//     "modelo": "Black one manga corta negra",
//     "precio": 4500,
//     "stock": 10,
//     "img": "https://firebasestorage.googleapis.com/v0/b/react-2022-c1cf8.appspot.com/o/black.jpg?alt=media&token=555a50e1-5b19-442b-aaa9-fdcfa4f00647"
// }

//CREATE
// createProducto(producto).then(mensaje => console.log(mensaje))

//UPDATE
getProducto("BRXaWfzvFPAYJo4HaXv0").then(prod => {
    prod.precio = 2000
    updateProducto("BRXaWfzvFPAYJo4HaXv0", prod).then(mensaje => console.log(mensaje))
})

//DELETE
// deleteProducto("BRXaWfzvFPAYJo4HaXv0").then(mensaje => console.log(mensaje))


//wpcYkyiHFztCLKSRy8le
// const cliente = {
//     nombre: "Pedro",
//     apellido: "Parker",
//     email: "pedrito@parker.com",
//     dni: 123123,
//     direccion: "Calle Falsa 123"
// }

// createOrdenCompra(cliente, 12500, Date.now()).then(orden => console.log(orden))

// getOrdenCompra("wpcYkyiHFztCLKSRy8le").then(orden => console.log(orden))