import {
    gql, useMutation
} from "@apollo/client";
import React from "react";

const MUTATION_PROYECTO = gql`
    mutation CreacionProyecto($idProyecto:String, 
        $nombreProyecto:String!, 
        $objGeneral:String, 
        $objEspecifico:String, 
        $presupuesto:Int, 
        $estado:String,
        $lider:String){
        SetCrearProyecto(project:{idProyecto:$idProyecto, 
            nombreProyecto:$nombreProyecto, 
            objGeneral:$objGeneral, 
            objEspecifico:$objEspecifico, 
            presupuesto:$presupuesto, 
            estado:$estado, 
            lider:$lider})
    }
`;

const CrearProyecto = () => {
    const [creadorDeProyecto] = useMutation(MUTATION_PROYECTO)
    let project = {
        idProyecto: "",
        nombreProyecto: "",
        objGeneral: "",
        objEspecifico: "",
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
                objGeneral: project.objGeneral.value,
                objEspecifico: project.objEspecifico.value,
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
                <input ref={objetivosGen => project.objGeneral = objetivosGen} placeholder="Objetivos Generales" />
            </div>
            <div>
                <label>Objetivos Especificos</label>
                <input ref={objetivosEsp => project.objEspecifico = objetivosEsp} placeholder="Objetivos Especificos" />
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