const VacantesModel = require("../models/VacantesModel");

class VacantesController
{
    static async indexGet(req, res)
    {
        let data = await VacantesModel.consultar();
        res.send(data);
    }

    static async getVacanteById(req, res)
    {
        const vacanteId = req.params.id;
        let data = await VacantesModel.consultarPorId(vacanteId);
        if (data.length > 0){
            res.send(data[0]);
            return;
        }
        res.status(404).send({message: "Vacante no encontrada"});
    }

    static async indexPost(req, res)
    {
        let data = {
            'nombre': req.body.nombre,
        }
        await VacantesModel.insertar(data);
    }
}

module.exports = VacantesController;