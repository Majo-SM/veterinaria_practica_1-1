const express = require('express');
const cors = require('cors')
require('dotenv').config();
const app = express();
const rutasClientes = require('./clientes/cliente.routes')
// const rutasCompras = require('./compra/compra.routes')
// const rutasMascotas = require('./mascota/mascota.routes')
// const rutasProductos = require('./producto/producto.routes')
// const rutasVentas = require('./venta/venta.routes')
// const rutasVeterinario = require('./veterinario/veterinario.routes')

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.status(200).json({message: "Hello from my-express-app!"});
});
app.use(rutasClientes)
// app.use(rutasCompras)
// app.use(rutasMascotas)
// app.use(rutasProductos)
// app.use(rutasVentas)
// app.use(rutasVeterinario)

const PORT = 80;

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});