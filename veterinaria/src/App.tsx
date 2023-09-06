import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TablaClientes } from './clientes/tabla_clientes'
import { HomePage } from './home/homePage'
import { TablaCitas } from './cita/tabla_citas'
import { TablaCompra } from './compra/tabla_compra'
import { TablaMascotas } from './mascota/tabla_mascota'
import { TablaProductos } from './producto/tabla_producto'
import { TablaVacunas } from './vacuna/tabla_vacuna'
import { TablaVentas } from './venta/tabla_venta'

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/clientes" element={<TablaClientes />}/>
          <Route path="/citas" element={<TablaCitas />}/>
          <Route path="/compras" element={<TablaCompra />}/>
          <Route path="/mascotas" element={<TablaMascotas />}/>
          <Route path="/productos" element={<TablaProductos />}/>
          <Route path="/vacunas" element={<TablaVacunas />}/>
          <Route path="/ventas" element={<TablaVentas />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
