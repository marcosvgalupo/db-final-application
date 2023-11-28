const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(
    8080, 
    () =>{
        console.log('o servidor está rodando na porta 8080')
    }
)

app.get("/", (req, res) => {
    res.render('index.ejs');
});


//abre a página de login
app.get("/home", (req, res) => {
    res.render('home.ejs');
});


//abre a página de reservas
app.get("/reservas", (req, res) => {
    res.render('reservas.ejs');
});

//abre a página de funcionários
app.get("/funcionarios", (req, res) => {
    res.render('funcionarios.ejs');
});


app.get("/hospedes", (req, res) => {
    res.render('hospedes.ejs');
});


//abre p fórmulário para adicionar um novo hóspede
app.get("/adicionar", (req, res) => {
    res.render('adicionar.ejs');
});


//verificação de login
app.post('/login', (req, res) => {
    const password = req.body.password;
  
    // Lógica de verificação da senha (substitua pela sua lógica real)
    if (password === '123') {
        res.render('home.ejs');
    } else {
        res.render('login.ejs');
    }
  });


app.get('/reservar', (req, res) => {
    res.render('reservar.ejs')
})