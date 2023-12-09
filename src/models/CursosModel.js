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

    static async insertar(curso)
    {
        let db = await connectToMysql();
        const result = await db('cursos').insert(curso).returning('id_curso');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('cursos').where('id_curso', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectToMysql();
        newData['id_curso'] = id;
        await db('cursos').where('id_curso', id).del();
        await db.insert(newData).into('cursos');
        return id;
    }
}

module.exports = CursosModel;