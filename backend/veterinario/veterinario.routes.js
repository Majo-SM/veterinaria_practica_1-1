const {Router} = require('express')
const Veterinario = require('./veterinario.controller');

const router = Router();

router.get('/cliente', Veterinario.getVeterinarios)


module.exports = router