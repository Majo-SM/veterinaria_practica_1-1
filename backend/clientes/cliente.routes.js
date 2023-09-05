const {Router} = require('express')
const Cliente = require('./cliente.controller');

const router = Router();

router.get('/cliente', Cliente.getClientes)


module.exports = router