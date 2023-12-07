const {connectToMysql} = require('../dbconnection');

class PuestosModel {
    static async consultar()
    {
        let db = await connectToMysql();
        let query = db("puestos");
        return await query;
    }

    static async consultarPorId(id)
    {
        let db = await connectToMysql();
        let query = db("puestos").where("id_puesto", id);
        return await query;
    }

    static async insertar(puestos)
    {
        let db = await connectToMysql();
        let query = db("puestos").insert(puestos);
        return await query;
    }
}

module.exports = PuestosModel;