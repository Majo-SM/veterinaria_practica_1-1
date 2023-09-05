const { dbConnection } = require("../db/config");


const getVeterinarios = async (req, res) => {
    try {
        const veterinarios = await dbConnection('veterinarios')
        const data = await veterinarios.find({})
        res.json(data);
    } catch (error) {
        console.error('Read error:', error);
        res.status(500).send('Error reading data');
    }
}

const newVeterinario = async (req, res) => {
    const { id_veterinaria, nombre_veterinaria, nombre, apeliido } = req.body
    try {
        const veterinarios = await dbConnection('veterinarios')
        const data = await veterinarios.inertOne({ id_veterinaria, nombre_veterinaria, nombre, apeliido })
        res.json(data);
    } catch (error) {
        console.error('Read error:', err);
        res.status(500).send('Error inserting data');
    }
}


module.exports = {
    getVeterinarios
}