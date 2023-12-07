const CursosModel = require("../models/CursosModel");

class CursosController
{
    static async indexGet(req, res)
    {
        let data = await CursosModel.consultar();
        res.send(data);
    }

    static async getCursoById(req, res)
    {
        const cursoId = req.params.id;
        let data = await CursosModel.consultarPorId(cursoId);
        if (data.length > 0){
            res.send(data[0]);
            return;
        }
        res.status(404).send({message: "Curso no encontrado"});
    }

    static async indexPost(req, res)
    {
        let data = {
            'nombre': req.body.nombre,
        }
        await CursosModel.insertar(data);
    }
}

module.exports = CursosController;