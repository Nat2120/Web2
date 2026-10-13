const express = require('express');
const path = require('path');

//router mapea en donde se encuentra cada archivo 
const router = express.Router();

router.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '../public','/index.html'));
});

router.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, '../public','/registro.html'));
});

module.exports = router; // de esta manera exportamos el router para poder usarlo en otros archivos


