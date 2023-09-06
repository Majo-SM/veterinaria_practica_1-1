const {Router} = require('express')
const Mascota = require('./mascota.controller');

const router = Router();

router.get('/mascotas', Mascota.getMascotas)


module.exports = router