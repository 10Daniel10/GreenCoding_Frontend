import {
    gql
  } from "@apollo/client"


export const infoProyectos = gql`
  query {
          obtenerProyectos {
          idProyecto
          nombreProyecto
          estado
          fase
          fechaInicio
        }
      }
`
export const detallesProyecto = (id) => {gql`
  query {
    obtenerProyecto(idProyecto: ${id}) {
    nombreProyecto
    objGeneral
    objEspecifico
    presupuesto
    lider {
      nombre
    }
  }
}
`}