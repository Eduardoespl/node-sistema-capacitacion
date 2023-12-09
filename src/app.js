//const http = require('http');
const express = require('express');
const app = express();
const puerto = 80;

const TrabajadoresController = require('./controllers/trabajadoresControllers');
app.use(express.json());
app.get('/trabajador', TrabajadoresController.indexGet);
app.get('/trabajador/:id([0-9]+)', TrabajadoresController.getTrabajadorById);

const CursosController = require('./controllers/cursosControllers');
app.use(express.json());
app.get('/cursos', CursosController.indexGet);

const CategoriasController = require('./controllers/categoriasControllers');
app.use(express.json());
app.get('/categorias', CategoriasController.indexGet);

const PuestosController = require('./controllers/puestosControllers');
app.use(express.json());
app.get('/puestos', PuestosController.indexGet);

const VacantesController = require('./controllers/vacantesControllers');
app.use(express.json());
app.get('/vacantes', VacantesController.indexGet);

app.get('/', function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola Mundo capacitacion!');
});

app.listen(puerto, function() {
    console.log("Servidor iniciado");
});
