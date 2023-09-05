const {Router} = require('express')
const Producto = require('./producto.controller');

const router = Router();

router.get('/cliente', Producto.getProductos)


module.exports = router