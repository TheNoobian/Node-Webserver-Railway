

require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const hbs = require('hbs');






//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');



// Servir contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'mi amor Paulina Palmeyro <3',
    titulo: 'Curso de Node'
  });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
      nombre: 'mi amor Paulina Palmeyro <3',
      titulo: 'Curso de Node'
    });
  });

  app.get('/elements', (req, res) => {
    res.render('elements', {
      nombre: 'mi amor Paulina Palmeyro <3',
      titulo: 'Curso de Node'
    });
  });


// Definir las rutas
app.get('/hola-mundo', (req, res) => {
    res.send('¡Hola mundo en su ruta!');
});


app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html');
});

// Manejar la ruta /elements
app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html');
});

// Ruta para manejar cualquier otra solicitud
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

// Escuchar en el puerto especificado
app.listen(port, () => {
    console.log(`La aplicación de ejemplo está escuchando en el puerto ${port}`);
});