/* const http = require ('http')
const puerto = 8080

const server = http.createServer((req, res) =>{

}) 

server.listen(puerto, () =>{

}) */

const express = require('express')
const app = express()
const puerto = 8080

app.get('/productos', (req, res) =>{
    res.send('Mira nuestros productos')
})

app.listen(puerto, ()=>{
    console.log(`El servidor se inicio en el puerto ${puerto}`)
})