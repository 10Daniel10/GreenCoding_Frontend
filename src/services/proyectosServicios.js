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
export const detallesProyecto = gql`
  query {
    obtenerProyecto(idProyecto: "001") {
    nombreProyecto
    objGeneral
    objEspecifico
    presupuesto
    lider {
      nombre
    }
  }
}
`