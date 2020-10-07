//Guardamos en una constante todo nos q ofrece express
const express = require('express');
const cors = require('cors');

// Se inicializa y guarda funcionalidades express
const server = express();

// Setea o Busca el puerto disponible, sino usa el 3000
server.set('port', process.env.PORT || 3000); 

// el formato de  datos para la recepciòn en formato json
server.use(express.json());

//permite la comunicaciòn entre servidores e/cliente vue y la API
server.use(cors());

//se especifican nuestras rutas
server.use(require('d:/ITS 3ro/Seg Cuatrimestre/Pract.Prof III/Practicos/Practico_vue-api-db/routes/route.ventas'));

// Damos arranque en este caso a nuestro servidor local
server.listen( server.get('port') );

console.log('Servidor en Macbook saliendo por el puerto', server.get('port'));