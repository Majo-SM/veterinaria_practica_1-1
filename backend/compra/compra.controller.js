const { dbConnection } = require('../db/config')


const getCompras = async (req, res) => {
    try {
        const compras = await dbConnection('compras')
        const data = await compras.find({})
        res.json(data);
    } catch (error) {
        console.error('Read error:', error);
        res.status(500).send('Error reading data');
    }
}

const newCompra = async (req, res) => {
    const {id_veterinaria, id_producto, id_proveedor, fecha_compra} = req.body
    try {
        const compras = await dbConnection('compras')
        const data = await compras.inertOne({id_veterinaria, id_producto, id_proveedor, fecha_compra})
        res.json(data);
    } catch (error) {
        console.error('Read error:', err);
        res.status(500).send('Error inserting data');
    }
}



module.exports = {
    getCompras
}