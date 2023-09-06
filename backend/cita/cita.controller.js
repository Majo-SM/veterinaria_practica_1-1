const { dbConnection } = require('../db/config')


const getCitas = async (req, res) => {
    try {
        const citas = await dbConnection('citas')
        const data = await citas.find({})
        res.json(data);
    } catch (error) {
        console.error('Read error:', error);
        res.status(500).send('Error reading data');
    }
}

const newCita = async (req, res) => {
    const { id_veterinario, id_cliente, nombre_cliente, fecha_programada } = req.body
    try {
        const citas = await dbConnection('citas')
        const data = await citas.inertOne({ id_veterinario, id_cliente, nombre_cliente, fecha_programada })
        res.json(data);
    } catch (error) {
        console.error('Read error:', err);
        res.status(500).send('Error inserting data');
    }
}



module.exports = {
    getCitas
}