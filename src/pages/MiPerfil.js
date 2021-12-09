import React, {useContext } from 'react';

import { useQuery } from '@apollo/react-hooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ObtenerUsuarioQuery} from '../util/graphql';
import '../../src/App.css'

import { AuthContext } from '../context/auth';
function MiPerfil() {
    
    const { user } = useContext(AuthContext);
    const obj = JSON.parse(JSON.stringify(user))
    const {
        data: { obtenerUsuario }
    } = useQuery(ObtenerUsuarioQuery, {
        variables: {
            id: obj.id
        }
    });

    return (
        <div>
            <div className="page-title">
                <h1>Perfil</h1>
            </div>
            <div>
                {obtenerUsuario && (
                    <div>
                        <h1>{obtenerUsuario.nombre}</h1>
                        <h1>{obtenerUsuario.correo}</h1>
                        <h1>{obtenerUsuario.clave}</h1>
                        <h1>{obtenerUsuario.estado}</h1>
                        <h1>{obtenerUsuario.tipo}</h1>

                    </div>
                )}
            </div>
        </div>);

}
export default MiPerfil;