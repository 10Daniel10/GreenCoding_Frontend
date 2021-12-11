import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Saludo } from "../components/Saludo"
import Inicio from "../views/Inicio"
import { Proyectos } from "../views/Proyectos"
import { Usuarios } from "../views/Usuarios"

export const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Inicio /> } />
                <Route path="/Proyectos/:tipo" element={ <Proyectos/> } />
                <Route path="/Usuarios/:tipo" element={ <Usuarios/> } />
            </Routes>
        </BrowserRouter>
    )
}