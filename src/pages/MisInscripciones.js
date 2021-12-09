import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import {ObtenerPostulacionesQuery} from '../util/graphql';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../src/App.css'

import { AuthContext } from '../context/auth';
function MisInscripciones() {
    const { user } = useContext(AuthContext);
    const obj = JSON.parse(JSON.stringify(user))
    const {
        data: { obtenerMisPostulaciones }
    } = useQuery(ObtenerPostulacionesQuery, {
        variables: {
            id: obj.id
        }
    });

    return (
        <div>
            <div className="page-title">
                <h1>inscripciones</h1>
            </div>
            
    
            <div>
                <table>
                {obtenerMisPostulaciones && (
                    <div>
                        {obtenerMisPostulaciones.length}

                    </div>
                )}
                </table>
            </div>
        </div>);

}
export default MisInscripciones;