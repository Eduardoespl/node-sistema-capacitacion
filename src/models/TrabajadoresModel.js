const {connectToMysql} = require('../dbconnection');

class TrabajadoresModel {
    static async consultar()
    {
        let db = await connectToMysql();
        let query = db("trabajadores");
        return await query;
    }

    static async consultarPorId(id)
    {
        let db = await connectToMysql();
        let query = db("trabajadores").where("id_trabajador", id);
        return await query;
    }

    static async insertar(trabajador)
    {
        let db = await connectToMysql();
        let query = db("trabajadores").insert(trabajador);
        return await query;
    }
}

module.exports = TrabajadoresModel;