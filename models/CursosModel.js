const {connectToMysql} = require('../dbconnection');

class CursosModel {
    static async consultar()
    {
        let db = await connectToMysql();
        let query = db("cursos");
        return await query;
    }

    static async consultarPorId(id)
    {
        let db = await connectToMysql();
        let query = db("cursos").where("id_curso", id);
        return await query;
    }

    static async insertar(cursos)
    {
        let db = await connectToMysql();
        let query = db("cursos").insert(cursos);
        return await query;
    }
}

module.exports = CursosModel;