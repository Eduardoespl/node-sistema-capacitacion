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
        const result = await db('trabajadores').insert(trabajador).returning('id_trabajador');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('trabajadores').where('id_trabajador', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectToMysql();
        newData['id_trabajador'] = id;
        await db('trabajadores').where('id_trabajador', id).del();
        await db.insert(newData).into('trabajadores');
        return id;
    }
}

module.exports = TrabajadoresModel;