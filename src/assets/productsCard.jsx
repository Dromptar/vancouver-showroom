
    export const consultDB = async (ruta) => {
        const promise = await fetch(ruta)
        const products = await promise.json()
        return products
        
    }
