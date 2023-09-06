const { dbConnection } = require('../db/config')


const getVacunas = async (req, res) => {
    try {
        const vacunas = await dbConnection('vacunas')
        const data = await vacunas.find({})
        const datas = await data.toArray()
        res.json(datas);
    } catch (error) {
        console.error('Read error:', error);
        res.status(500).send('Error reading data');
    }
}

const newVacuna = async (req, res) => {
    const {id_mascota, id_veterinario, id_producto, fecha_aplicacion, dosis} = req.body
    try {
        const vacunas = await dbConnection('vacunas')
        const data = await vacunas.inertOne({id_mascota, id_veterinario, id_producto, fecha_aplicacion, dosis})
        res.json(data);
    } catch (error) {
        console.error('Read error:', err);
        res.status(500).send('Error inserting data');
    }
}



module.exports = {
    getVacunas
}