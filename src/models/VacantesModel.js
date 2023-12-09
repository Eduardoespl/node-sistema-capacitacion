const {connectToMysql} = require('../dbconnection');

class VacantesModel {
    static async consultar()
    {
        let db = await connectToMysql();
        let query = db("vacantes");
        return await query;
    }

    static async consultarPorId(id)
    {
        let db = await connectToMysql();
        let query = db("vacantes").where("id_vacante", id);
        return await query;
    }

    static async insertar(vacantes)
    {
        let db = await connectToMysql();
        let query = db("vacantes").insert(vacantes);
        return await query;
    }

    static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('vacantes').where('id_vacante', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectToMysql();
        newData['id_vacante'] = id;
        await db('vacantes').where('id_vacante', id).del();
        await db.insert(newData).into('vacantes');
        return id;
    }
}

module.exports = VacantesModel;