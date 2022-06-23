import express from 'express';
import path from 'path';
import rutaProductos from './routes/products.js'

/** INICIALIZACION API con EXPRESS */
const app = express();
const puerto = 8080;
const server = app.listen(puerto, () =>
  console.log('Server up en puerto', puerto)
);

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set('view engine', 'ejs');
const viewsPath = path.resolve(__dirname, '../views');
app.set('views', viewsPath);

app.use('/api', rutaProductos);