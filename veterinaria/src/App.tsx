import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TablaClientes } from './clientes/tabla_clientes'
import { HomePage } from './home/homePage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/clientes" element={<TablaClientes />}>
          {/* <Route path="/about" element={<AboutPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
