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
        const result = await db('categorias').insert(categorias).returning('id_categoria');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('categorias').where('id_categoria', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectToMysql();
        newData['id_categoria'] = id;
        await db('categorias').where('id_categoria', id).del();
        await db.insert(newData).into('categorias');
        return id;
    }
}

module.exports = CategoriasModel;