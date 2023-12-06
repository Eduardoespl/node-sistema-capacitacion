const {connectToMysql} = require('../dbconnection');

class CategoriasModel {
    static async consultar()
    {
        let db = await connectToMysql();
        let query = db("categorias");
        return await query;
    }

    static async consultarPorId(id)
    {
        let db = await connectToMysql();
        let query = db("categorias").where("id_categoria", id);
        return await query;
    }

    static async insertar(categorias)
    {
        let db = await connectToMysql();
        let query = db("categorias").insert(categorias);
        return await query;
    }
}

module.exports = CategoriasModel;