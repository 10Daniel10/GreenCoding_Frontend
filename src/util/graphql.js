import gql from 'graphql-tag';

export const ObtenerProyectosQuery = gql`
  
    query obtenerProyectos {
      id
      nombreProyecto
      objGeneral
      objEspecifico
      presupuesto
      fechaInicio
      fechaTermina
      estado
      fase
    }

  

  
`;
export const ObtenerUsuarioQuery = gql`
  
    query ($id: String) {
  obtenerUsuario(id: $id) {

    nombre
    correo
    clave
    estado
    tipo
  }
}

`;
export const ObtenerPostulacionesQuery=gql`
 query($_id: String) {
  obtenerMisPostulaciones(id: $_id) {
    id
    nombreProyecto
    presupuesto
    lider {
      id
    }
    estado
    estudiantesInscritos {
      id
    }
    fase
    avances {
      id
    }
    
  }

}
`;
export const InscribirmeProyectos=gql`
mutation ($idProyecto: String!, $idUsuario: String!) {
  InscribirmeProyecto(idProyecto: $idProyecto, idUsuario: $idUsuario)
}

`;
export const Veravance=gql`
mutation ($idProyecto: String!, $estudiante: String!) {
  verAvances(idProyecto: $idProyecto, estudiante: $estudiante)
}
`;
