//const http = require('http');
const express = require('express');
const app = express();
const puerto = 80;

const TrabajadoresController = require('./controllers/trabajadoresControllers');
app.use(express.json());
app.get('/trabajador', TrabajadoresController.indexGet);
app.get('/trabajador/:id([0-9]+)', TrabajadoresController.getTrabajadorById);
app.post('/trabajador', TrabajadoresController.indexPost);
app.put('/trabajador/:id([0-9]+)', TrabajadoresController.itemPut);
app.patch('/trabajador/:id([0-9]+)', TrabajadoresController.itemPatch);

const CursosController = require('./controllers/cursosControllers');
app.use(express.json());
app.get('/cursos', CursosController.indexGet);
app.get('/cursos/:id([0-9]+)', CursosController.getCursoById);
app.post('/cursos', CursosController.indexPost);
app.put('/cursos/:id([0-9]+)', CursosController.itemPut);
app.patch('/cursos/:id([0-9]+)', CursosController.itemPatch);

const CategoriasController = require('./controllers/categoriasControllers');
app.use(express.json());
app.get('/categorias', CategoriasController.indexGet);
app.get('/categorias/:id([0-9]+)', CategoriasController.getCategoriaById);
app.post('/categorias', CategoriasController.indexPost);
app.put('/categorias/:id([0-9]+)', CategoriasController.itemPut);
app.patch('/categorias/:id([0-9]+)', CategoriasController.itemPatch);

const PuestosController = require('./controllers/puestosControllers');
app.use(express.json());
app.get('/puestos', PuestosController.indexGet);
app.get('/puestos/:id([0-9]+)', PuestosController.getPuestoById);
app.post('/puestos', PuestosController.indexPost);
app.put('/puestos/:id([0-9]+)', PuestosController.itemPut);
app.patch('/puestos/:id([0-9]+)', PuestosController.itemPatch);

const VacantesController = require('./controllers/vacantesControllers');
app.use(express.json());
app.get('/vacantes', VacantesController.indexGet);
app.get('/vacantes/:id([0-9]+)', VacantesController.getVacanteById);
app.post('/vacantes', VacantesController.indexPost);
app.put('/vacantes/:id([0-9]+)', VacantesController.itemPut);
app.patch('/vacantes/:id([0-9]+)', VacantesController.itemPatch);

app.get('/', function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola Mundo capacitacion!');
});

app.listen(puerto, function() {
    console.log("Servidor iniciado");
});
