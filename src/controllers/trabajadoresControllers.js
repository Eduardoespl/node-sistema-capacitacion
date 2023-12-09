const TrabajadoresModel = require("../models/trabajadoresModel");

class TrabajadoresController
{
    static async indexGet(req, res)
    {
        let data = await TrabajadoresModel.consultar();
        res.send(data);
    }

    static async getTrabajadorById(req, res)
    {
        const trabajadorId = req.params.id;
        let data = await TrabajadoresModel.consultarPorId(trabajadorId);
        if (data.length > 0){
            res.send(data[0]);
            return;
        }
        res.status(404).send({message: "Trabajador no encontrado"});
    }

    static async indexPost(req, res){
        try {
            const newData = req.body;
            const insertedId = await TrabajadoresModel.insertar(newData);
            res.status(201)
                .header('Location', `/trabajador/${insertedId}`)
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
            const result = await TrabajadoresModel.reemplazar(id, updatedData);
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
            const result = await TrabajadoresModel.actualizar(id, updatedFields);
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

module.exports = TrabajadoresController;