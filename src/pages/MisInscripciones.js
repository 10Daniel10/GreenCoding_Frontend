import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ObtenerPostulacionesQuery } from '../util/graphql';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../src/App.css'

import { AuthContext } from '../context/auth';
function MisInscripciones() {
    const { user } = useContext(AuthContext);
    const obj = JSON.parse(JSON.stringify(user))
    const { loading,
        data: { obtenerMisPostulaciones }
    } = useQuery(ObtenerPostulacionesQuery, {
        variables: {
            _id: obj.id
        }
    });

    return (
        <div>
            <div className="page-title">
                <h1>inscripciones</h1>
            </div>



            <div id="dvb" class="container table-responsive py-5" style={{ "width": "100%", "max-width:": "480px", "overflow-x": "scroll" }}>

                <table id="tbl" class="table table-bordered table-hover">


                    <thead id="thd" class="text-center table-success">
                        <tr>

                            <th scope="col">Nombre del proyecto</th>
                            <th scope="col">Presupuesto</th>
                            <th scope="col">Lider</th>
                            <th scope="col">Estado</th>
                            <th scope="col">estudiantesInscritos</th>
                            <th scope="col">fase</th>
                            <th scope="col">avances</th>
                        
                            <th scope="col">Operacion</th>
                        </tr>
                    </thead>


                    <tbody class="text-center">

                        {obtenerMisPostulaciones &&
                            obtenerMisPostulaciones.map((post) => (
                                <tr key={post.id}>
                                    
                                    <td>{post.nombreProyecto}</td>
                                    <td>{post.presupuesto}</td>
                                    <td>{post.lider ?post.lider.id:"no tiene"}</td>
                                    <td>{post.estado}</td>
                                    <td>{post.estudiantesInscritos.length>0 ?post.estudiantesInscritos.id:"no tiene"}</td>
                                    <td>{post.fase}</td>
                                    <td>{post.avances.length>0 ?post.avances.id:"no tiene"}</td>



                                    <td className='operation'>
                                        <button className='button' >Registrar Avances</button>
                                    </td>
                                </tr>

                            ))}
                    </tbody>


                </table>
            </div>
        </div>);

}
export default MisInscripciones;