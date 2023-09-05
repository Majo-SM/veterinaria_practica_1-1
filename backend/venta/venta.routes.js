const {Router} = require('express')
const Venta = require('./venta.controller');

const router = Router();

router.get('/cliente', Venta.getVentas)


module.exports = router