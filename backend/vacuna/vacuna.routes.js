const {Router} = require('express')
const Vacunas = require('./vacuna.controller');

const router = Router();

router.get('/vacunas', Vacunas.getVacunas)


module.exports = router