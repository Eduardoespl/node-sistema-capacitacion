const CategoriasModel = require("../models/CategoriasModel");

class CategoriasController
{
    static async indexGet(req, res)
    {
        let data = await CategoriasModel.consultar();
        res.send(data);
    }

    static async getCategoriaById(req, res)
    {
        const categoriaId = req.params.id;
        let data = await CategoriasModel.consultarPorId(categoriaId);
        if (data.length > 0){
            res.send(data[0]);
            return;
        }
        res.status(404).send({message: "Categoria no encontrado"});
    }

    static async indexPost(req, res){
        try {
            const newData = req.body;
            const insertedId = await CategoriasModel.insertar(newData);
            res.status(201)
                .header('Location', `/categorias/${insertedId}`)
                .send({status: 201, message: "Inserted"})
        } catch (error) {
            console.log(error);
            res.status(400).send({status: 400, message: error.message});
        }
    }

    static async itemPut(req, res) {
        try {
            const id = req.params.id;
            const updatedData = req.body;
            const result = await CategoriasModel.reemplazar(id, updatedData);
            if (result === 0) {
                res.status(404).send({ errno: 404, error: 'Not found' });
            } else {
                res.send({ message: 'Updated successfully'});
            }
        } catch (error) {
            console.error(error);
            res.status(400).send({ status: 400, message: error.message});
        }
    }

    static async itemPatch(req, res) {
        try {
            const id = req.params.id;
            const updatedFields = req.body;
            const result = await CategoriasModel.actualizar(id, updatedFields);
            if (result === 0) {
                res.status(404).send({ errno: 404, error: 'Not found' });
            } else {
                res.send({ message: 'Successfull partial update'});
            }
        } catch (error) {
            console.error(error);
            res.status(400).send({status: 400, message: error.message});
        }
    }
}

module.exports = CategoriasController;