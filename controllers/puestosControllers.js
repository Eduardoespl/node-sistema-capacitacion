const PuestosModel = require("../models/PuestosModel");

class PuestosController
{
    static async indexGet(req, res)
    {
        let data = await PuestosModel.consultar();
        res.send(data);
    }

    static async getPuestoById(req, res)
    {
        const puestoId = req.params.id;
        let data = await PuestosModel.consultarPorId(puestoId);
        if (data.length > 0){
            res.send(data[0]);
            return;
        }
        res.status(404).send({message: "Puesto no encontrado"});
    }

    static async indexPost(req, res)
    {
        let data = {
            'nombre': req.body.nombre,
        }
        await PuestosModel.insertar(data);
    }
}

module.exports = PuestosController;