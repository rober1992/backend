const express = require('express')
const { json } = require('express/lib/response')
const fs = require('fs')
const app = express()
const PORT = 8080
const productos = fs.readFileSync('./productos.txt', "utf-8")

function elementoAleatorio(datos) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    if (!datos.length) {
        return null;
    }

    let indiceAleatorio = Math.floor(Math.random() * datos.length);

    return datos[indiceAleatorio];
}

try {
    console.log(elementoAleatorio(JSON.parse(productos)));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

app.get('/productos', (req, res) =>{
    res.send(JSON.parse(productos))
    
})

app.get('/productoRandom', (req, res) =>{
    res.send(elementoAleatorio(JSON.parse(productos)))
    
})

app.listen(PORT, ()=>{
    console.log(`El servidor se inicio en el puerto ${PORT}`)
    
})



