const { dbConnection } = require("../db/config");


const getVentas = async (req, res) => {
    try {
        const ventas = await dbConnection('ventas')
        const data = await ventas.find({})
        const datas = await data.toArray()
        res.json(datas);
    } catch (error) {
        console.error('Read error:', error);
        res.status(500).send('Error reading data');
    }
}

const newVenta = async (req, res) => {
    const { id_veterinaria, id_cliente, id_producto, id_venta_detalle, fecha_venta, descripcion } = req.body
    try {
        const ventas = await dbConnection('ventas')
        const data = await ventas.inertOne({ id_veterinaria, id_cliente, id_producto, id_venta_detalle, fecha_venta, descripcion })
        res.json(data);
    } catch (error) {
        console.error('Read error:', err);
        res.status(500).send('Error inserting data');
    }
}



module.exports = {
    getVentas
}