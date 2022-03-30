const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

/* enrutadores */
const indexRouter = require('./routes/indexRouter');

app.use(express.static('public'));

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}
http://localhost:${PORT}`));

/* views config */
app.set('view engine', 'ejs');
app.set('views', 'src/views'); 

/* middlewares de rutas*/
app.use('/', indexRouter);


/* app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.html'))
}); */

app.get('/quienessomos', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/quienessomos.html'))
})

app.get('/carrito', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/carrito.html'))
})

app.get('/catalogo', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/catalogo.html'))
})

app.get('/ofertas', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/ofertas.html'))
})