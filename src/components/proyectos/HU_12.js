import {
    gql, useMutation
} from "@apollo/client";
import React from "react";
import '../../Style.css';

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

    return (<div className="formulario"><h1 className="titulo">Crear Proyecto</h1>
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
                <input className="controls" ref={id => project.idProyecto = id} placeholder="Id Proyecto" />
            </div>
            <div>
                <label>Nombre Proyecto</label>
                <input className="controls" ref={nombre => project.nombreProyecto = nombre} placeholder="Nombre" />
            </div>
            <div>
                <label>Objetivos Generales</label>
                <input className="controls" ref={objetivosGen => project.objGeneral = objetivosGen} placeholder="Objetivos Generales" />
            </div>
            <div>
                <label>Objetivos Especificos</label>
                <input className="controls" ref={objetivosEsp => project.objEspecifico = objetivosEsp} placeholder="Objetivos Especificos" />
            </div>
            <div>
                <label>Presupuesto</label>
                <input className="controls" ref={presupuesto => project.presupuesto = presupuesto} placeholder="Presupuesto" />
            </div>
            <div>
                <label>Estado Proyecto</label>
                <input className="controls" ref={estado => project.estado = estado} placeholder="Estado Proyecto" />
            </div>
            <div>
                <label>Lider</label>
                <input className="controls" ref={lider => project.lider = lider} placeholder="Lider" />
            </div>
            
            <div><button className="boton" type="submit">Registrar Proyecto</button></div>
        </form>
    </div>)
}

export default CrearProyecto