//const http = require('http');
const express = require('express');
const app = express();
const puerto = 80;

const TrabajadoresController = require('./controllers/trabajadoresController');
app.use(express.json());
app.get('/trabajador', TrabajadoresController.indexGet);
app.get('/trabajador/:id([0-9]+)', TrabajadoresController.getTrabajadorById);

const CursosController = require('./controllers/cursosController');
app.use(express.json());
app.get('/cursos', CursosController.indexGet);

const CategoriasController = require('./controllers/categoriasController');
app.use(express.json());
app.get('/categorias', CategoriasController.indexGet);

const PuestosController = require('./controllers/puestosController');
app.use(express.json());
app.get('/puestos', PuestosController.indexGet);

const VacantesController = require('./controllers/vacantesController');
app.use(express.json());
app.get('/vacantes', VacantesController.indexGet);

app.get('/', function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola Mundo!');
});

app.listen(puerto, function() {
    console.log("Servidor iniciado");
});
