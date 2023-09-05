const { dbConnection } = require("../db/config");


const getProductos = async (req, res) => {
    try {
        const productos = await dbConnection('productos')
        const data = await productos.find({})
        res.json(data);
    } catch (error) {
        console.error('Read error:', error);
        res.status(500).send('Error reading data');
    }
}

const newProducto = async (req, res) => {
    const { id_tipo_producto, nombre } = req.body
    try {
        const productos = await dbConnection('productos')
        const data = await productos.inertOne({ id_tipo_producto, nombre })
        res.json(data);
    } catch (error) {
        console.error('Read error:', err);
        res.status(500).send('Error inserting data');
    }
}


module.exports = {
    getProductos
}