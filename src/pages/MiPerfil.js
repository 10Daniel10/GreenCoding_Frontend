import React, {useContext } from 'react';
import { useQuery } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ObtenerUsuarioQuery} from '../util/graphql';
import '../../src/App.css'
import { AuthContext } from '../context/auth';
function MiPerfil() {
    
    const { user } = useContext(AuthContext);
    const obj = JSON.parse(JSON.stringify(user))
   
    const { loading, error, data } = useQuery(ObtenerUsuarioQuery, {
        variables: { id:obj.id },
      });
   
    return (
        <div>
            <div className="page-title">
                <h1>Perfil</h1>
            </div>
            <div>
                {data && (
                    <div>
                        <h1>{data.obtenerUsuario.nombre}</h1>
                        <h1>{data.obtenerUsuario.correo}</h1>
                        <h1>{data.obtenerUsuario.clave}</h1>
                        <h1>{data.obtenerUsuario.estado}</h1>
                        <h1>{data.obtenerUsuario.tipo}</h1>
                    </div>
                )}
            </div>
        </div>);

}
export default MiPerfil;