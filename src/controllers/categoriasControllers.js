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
        let data = await CategoriasModel.consultarPorId(categoriaIdId);
        if (data.length > 0){
            res.send(data[0]);
            return;
        }
        res.status(404).send({message: "Categoria no encontrado"});
    }

    static async indexPost(req, res)
    {
        let data = {
            'nombre': req.body.nombre,
        }
        await CategoriasModel.insertar(data);
    }
}

module.exports = CategoriasController;