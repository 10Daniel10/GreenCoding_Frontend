import React from 'react'
import { AUsuarios } from './admin/AUsuarios';
import { LUsuarios } from './lider/LUsuarios';
import { useParams } from "react-router"

export const Usuarios = () => {
    const { tipo } = useParams();

    if(tipo === "Lider"){
    return (
        <div>
            <LUsuarios />
        </div>
    )} else if (tipo === "Administrador") {
        return(
            <div>
                <AUsuarios />
            </div>
        )
    } 
}