const express = require('express');

//instanciamos 
const app = express();
const port = 3006;

const path = require('path');

app.get("/", (req, res) => {
    //res.send("Hola mundo");
   // res.sendFile("/Users/natal/Documents/web2/serverexpress/index.html");
   res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});