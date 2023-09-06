const { dbConnection } = require('../db/config')


const getClientes = async (req, res) => {
    try {
        const clientes = await dbConnection('clientes')
        const data = await clientes.find({})
        // console.log(data)
        const datas = await data.toArray()
        res.json(datas);
    } catch (error) {
        console.error('Read error:', error);
        res.status(500).send('Error reading data');
    }
}

const newCliente = async (req, res) => {
    const {nombre, apellido, genero, direccion, telefono, fecha_registro, ultima_visita, antiguedad, ci, num_mascotas} = req.body
    try {
        const clientes = await dbConnection('clientes')
        const data = await clientes.inertOne({nombre, apellido, genero, direccion, telefono, fecha_registro, ultima_visita, antiguedad, ci, num_mascotas})
        res.json(data);
    } catch (error) {
        console.error('Read error:', err);
        res.status(500).send('Error inserting data');
    }
}



module.exports = {
    getClientes
}