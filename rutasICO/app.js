const express = require('express');
const path = require('path');
const pagesRoutes = require('./routes/pages'); // Importamos las rutas de pages.js

const port = 3050;
const app = express();

app.use(express.static('public')); // Configuramos la carpeta 'public' como estática para servir archivos como CSS, JS, imágenes, etc.
app.use('/', pagesRoutes); // Usamos las rutas de pages.js para manejar las solicitudes a la raíz

app.get('/', (req, res) => {
    res.redirect('/index'); // Redirigimos la raíz a /index
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});