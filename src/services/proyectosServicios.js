import {
    gql
  } from "@apollo/client"


export const GET_PROYECTOS = gql`
query {
        obtenerProyectos {
        idProyecto
        nombreProyecto
        estado
        fase
        fechaInicio
        fechaTermina
        objGeneral
        objEspecifico
        presupuesto
        lider {
          nombre
          id
        }
        estudiantesInscritos {
          estudiante {
            nombre
            id
          }
          estado
        }
      }
    }`

export const MUTATION_ESTADO = gql`
mutation($idProyecto: String!, $estado: String!){
setEstadoProyecto(idProyecto: $idProyecto, estado: $estado)
}
`;

export const MUTATION_FASE = gql`
  mutation($idProyecto: String!, $fase: String!) {
  setFaseProyecto(idProyecto: $idProyecto, fase: $fase)
}
`