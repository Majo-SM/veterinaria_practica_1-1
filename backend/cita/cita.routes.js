const {Router} = require('express')
const Cita = require('./cita.controller');

const router = Router();

router.get('/citas', Cita.getCitas)


module.exports = router