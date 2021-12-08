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
