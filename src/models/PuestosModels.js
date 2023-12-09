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
        const result = await db('puestos').insert(puestos).returning('id_puesto');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('puestos').where('id_puesto', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectToMysql();
        newData['id_puesto'] = id;
        await db('puestos').where('id_puesto', id).del();
        await db.insert(newData).into('puestos');
        return id;
    }
}

module.exports = PuestosModel;