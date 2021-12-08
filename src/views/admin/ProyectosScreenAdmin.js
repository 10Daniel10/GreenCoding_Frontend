import {
  useQuery,
  gql
} from "@apollo/client"

export const ProyectosScreenAdmin = () => {

  const infoProyectos = gql`
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
  const getDetallesProyecto = (id) => {gql`
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

  const { loading: loadingInfo, data: info } = useQuery(infoProyectos);
  const { loading: loadingDetalles, data: detalles } = useQuery(getDetallesProyecto);

  if (loadingInfo) return <h1>Cargando Proyectos ...</h1>
  if (loadingDetalles) return <h1>Cargando Proyectos ...</h1>

  const datos = info.obtenerProyectos.map(({ idProyecto, nombreProyecto, fase, fechaInicio, estado }) => (
    <tr data-toggle="collapse" data-target="detalles" data-parent="TablaProyectos">
      <td>{idProyecto}</td>
      <td>{nombreProyecto}</td>
      <td>{fase}</td>
      <td>{estado}</td>
      <td>{fechaInicio}</td>
    </tr>
  ));

  const det = detalles.obtenerProyecto.map(({ nombreProyecto, objGeneral, objEspecifico, presupuesto, lider }) => {
    <tr id="detalles" class="collapse">
      <ul className="list-group animate__animated animate__fadeIn">
        <li className="list-group-item">
          <b>Nombre Proyecto:</b> {nombreProyecto}
        </li>
        <li className="list-group-item">
          <b>Objetivo General:</b> {objGeneral}
        </li>
        <li className="list-group-item">
          <b>Objetivo objEspecifico:</b> {objEspecifico}
        </li>
        <li className="list-group-item">
          <b>Presupuesto:</b> {presupuesto}
        </li>
        <li className="list-group-item">
          <b>Nombre Líder:</b> {lider.nombre}
        </li>
      </ul>

    </tr>
  })

  return (

    <div class="container">
      <table class="table table-condensed" id="TablaProyectos">
        <thead>
          <tr>
            <th>id Proyecto</th>
            <th>Nombre</th>
            <th>Fase</th>
            <th>Estado</th>
            <th>Fecha de Inicio</th>
          </tr>
        </thead>
        <tbody class="panel">
          {datos}
          {det}
        </tbody>
      </table>
    </div>

  )
}


