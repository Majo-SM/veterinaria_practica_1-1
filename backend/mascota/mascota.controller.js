const { dbConnection } = require('../db/config');


const getMascotas = async (req, res) => {
    try {
        const mascotas = await dbConnection('mascotas')
        const data = await mascotas.find({})
        res.json(data);
    } catch (error) {
        console.error('Read error:', error);
        res.status(500).send('Error reading data');
    }
}

const newMascota = async (req, res) => {
    const {id_cliente, id_tipo_mascota, id_habito, nombre_mascota, fecha_nacimiento, genero, color, esterilizacion } = req.body
    try {
        const mascotas = await dbConnection('mascotas')
        const data = await mascotas.inertOne({id_cliente, id_tipo_mascota, id_habito, nombre_mascota, fecha_nacimiento, genero, color, esterilizacion })
        res.json(data);
    } catch (error) {
        console.error('Read error:', err);
        res.status(500).send('Error inserting data');
    }
}


module.exports = {
    getMascotas
}