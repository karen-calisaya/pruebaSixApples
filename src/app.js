const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

/* enrutadores */
const indexRouter = require('./routes/indexRouter');

/* views config */
app.set('view engine', 'ejs');
app.set('views', 'src/views'); 


/* config archivos estaticos */
app.use(express.static('public'));

/* middlewares de rutas*/
app.use('/', indexRouter);


app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}
http://localhost:${PORT}`));




app.get('/carrito', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/carrito.html'))
})

app.get('/catalogo', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/catalogo.html'))
})

app.get('/ofertas', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/ofertas.html'))
})