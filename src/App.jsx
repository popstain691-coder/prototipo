import { BrowserRouter as Router, Route, Routes, Navigate,Link } from 'react-router-dom';
import Coleccion from "./Componentes/Coleccion"
import Favoritos from "./Componentes/favoritos"
import Info from "./Componentes/info"
import Inicio from "./Componentes/inicio"
import Studio_Ghibli from "./Componentes/Studio_Ghibli"
import Usuario from "./Componentes/usuario"

function App() {
  return (
    <>
    <Router>
       <nav className='c-menu'>
          <Link to="/">Inicio</Link>
          <Link to="/coleccion">Coleccion</Link>
          <Link to="/favoritos">Favoritos</Link>
          <Link to="/info">Info</Link>
          <Link to="/usuario">Usuario</Link>
        </nav>
      <Routes>
         <Route path="/" element={<Inicio />} />
         <Route path="/coleccion" element={<Coleccion />} />
          <Route path="/favoritos" element={<Favoritos />} />
           <Route path="/info" element={<Info />} />
            <Route path="/studio_Ghibli" element={<Studio_Ghibli />} />
            <Route path="/usuario" element={<Usuario />} />
              <Route path="/pokemon/:name" element={<Pokemon />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
