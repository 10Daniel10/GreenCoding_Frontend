import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Saludo } from "../components/Saludo"
import { ProyectosScreenAdmin } from "../views/admin/ProyectosScreenAdmin"

export const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Saludo/> } />
                <Route path="/proyectos" element={ <ProyectosScreenAdmin/> } />
            </Routes>
        </BrowserRouter>
    )
}