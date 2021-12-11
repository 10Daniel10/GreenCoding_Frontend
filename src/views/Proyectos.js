import React from 'react'
import { AProyectos } from './admin/AProyectos';
import { EProyectos } from './estudiante/EProyectos';
import { LProyectos } from './lider/LProyectos';
import { useParams } from "react-router"

export const Proyectos = () => {
    const { tipo } = useParams();

    if(tipo === "Lider"){
    return (
        <div>
            <LProyectos />
        </div>
    )} else if (tipo === "Administrador") {
        return(
            <div>
                <AProyectos />
            </div>
        )
    } else if ( tipo === "Estudiante"){
        return(
            <div>
                <EProyectos />
            </div>
        )
    }
}
