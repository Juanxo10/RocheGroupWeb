import { Routes, Route } from 'react-router-dom'
import Inicio from './inicio'
import Proceso from './proceso'
import Servicios from './servicios'
import Nosotros from './nosotros'
import Contacto from './contacto'
import Proyecto from './proyecto'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/proceso" element={<Proceso />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/proyectos/:slug" element={<Proyecto />} />
    </Routes>
  )
}

export default App
