import gql from 'graphql-tag';

export const ObtenerProyectosQuery = gql`
  
    {  obtenerProyectos {
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
query ($id: String) {
  obtenerMisPostulaciones(id: $id) {
    id
    nombreProyecto
    objGeneral
    objEspecifico
    presupuesto
    fechaInicio
    fechaTermina
    estado
    fase
    estudiantesInscritos {
      id
      estudiante
    }
    lider {
      correo
    }
    avances {
      idProyecto {
        nombreProyecto
      }
    }
  }
}
`;
