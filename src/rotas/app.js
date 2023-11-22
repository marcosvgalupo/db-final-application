const express = require('express');
const app = express();

app.listen(
    8080, 
    () =>{
        console.log('o servidor está rodando na porta 8080')
    }
)