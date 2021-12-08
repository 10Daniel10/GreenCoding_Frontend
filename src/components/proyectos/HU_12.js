import {
    gql, useMutation
} from "@apollo/client";
import React from "react";

const MUTATION_PROYECTO = gql`
    mutation creeProyecto($idProyecto:String, $nombreProyecto:String, $objGe:String, $objEsp:String, $presupuesto:Int, $estado:String, $lider:ID){
        SetCrearProyecto(project:{idProyecto:$idProyecto, nombre:$nombreProyecto, objetivosGenerales:$objGe, objetivosEspecificos:$objEsp, presupuesto:$presupuesto, estado:$estado, lider:$lider,})
    }
`;

const CrearProyecto = () => {
    const [creadorDeProyecto] = useMutation(MUTATION_PROYECTO)
    let project = {
        idProyecto: "",
        nombreProyecto: "",
        objetivosGenerales: "",
        ObjetivosEspecificos: "",
        presupuesto: 0,
        estado: "",
        lider: "",
    }

    return (<div><h1>Crear Proyecto</h1>
        <form onSubmit={e => {
            e.preventDefault();
            creadorDeProyecto({variables:{
                idProyecto: project.idProyecto.value,
                nombreProyecto: project.nombreProyecto.value,
                objGe: project.objetivosGenerales.value,
                objGe: project.objetivosEspecificos.value,
                presupuesto: parseInt(project.presupuesto.value),
                estado: project.estado.value,
                lider: project.lider.value
            }})
        }} >
             <div>
                <label>ID Proyecto</label>
                <input ref={id => project.idProyecto = id} placeholder="Id Proyecto" />
            </div>
            <div>
                <label>Nombre Proyecto</label>
                <input ref={nombre => project.nombreProyecto = nombre} placeholder="Nombre" />
            </div>
            <div>
                <label>Objetivos Generales</label>
                <input ref={objetivosGen => project.objetivosGenerales = objetivosGen} placeholder="Objetivos Generales" />
            </div>
            <div>
                <label>Objetivos Especificos</label>
                <input ref={objetivosEsp => project.objetivosEspecificos = objetivosEsp} placeholder="Objetivos Especificos" />
            </div>
            <div>
                <label>Presupuesto</label>
                <input ref={presupuesto => project.presupuesto = presupuesto} placeholder="Presupuesto" />
            </div>
            <div>
                <label>Estado Proyecto</label>
                <input ref={estado => project.estado = estado} placeholder="Estado Proyecto" />
            </div>
            <div>
                <label>Lider</label>
                <input ref={lider => project.lider = lider} placeholder="Lider" />
            </div>
            
            <div><button type="submit">Registrar Proyecto</button></div>
        </form>
    </div>)
}

export default CrearProyecto