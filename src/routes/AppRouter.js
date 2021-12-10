import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Saludo } from "../components/Saludo"
import { AProyectos } from "../views/admin/AProyectos"

export const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Saludo/> } />
                <Route path="/proyectos" element={ <AProyectos/> } />
            </Routes>
        </BrowserRouter>
    )
}