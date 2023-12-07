const TrabajadoresModel = require("../models/TrabajadoresModel");

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

    static async indexPost(req, res)
    {
        let data = {
            'nombre': req.body.nombre,
        }
        await MenusModel.insertar(data);
    }
}

module.exports = TrabajadoresController;