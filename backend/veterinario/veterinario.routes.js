const {Router} = require('express')
const Veterinario = require('./veterinario.controller');

const router = Router();

router.get('/veterinarios', Veterinario.getVeterinarios)


module.exports = router