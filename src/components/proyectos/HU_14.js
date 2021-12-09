import {
    useQuery,
    gql
  } from "@apollo/client";
import '../../Style.css';
  
  const ProyectosLiderActivos = () => {
    const PROYECTOSLIDERACTIVOS = gql`
    query{
        obtenerProyectosLider(lider: "61a4276fec6d725cec532b89"){
        nombreProyecto
        objGeneral
        objEspecifico
        presupuesto
        estado
        }
    }
  `;
    const { loading, error, data } = useQuery(PROYECTOSLIDERACTIVOS)
    if (loading) return "<h1>Cargando</h1>"
  
    const datosTabla = data.obtenerProyectosLider.map(({ nombreProyecto, objGeneral, objEspecifico, presupuesto, estado }) => (  
      <tr>
        <td className="tabla">{nombreProyecto}</td>
        <td className="tabla">{objGeneral}</td>
        <td className="tabla">{objEspecifico}</td>
        <td className="tabla">{presupuesto}</td>
        <td className="tabla">{estado}</td>
        <td className="tabla"><button>Detalles</button></td>
      </tr>
    ));
  
    return <div className="centro2">
        <table className="tabla">
            <tr>
                <th className="tabla">Nombre Proyecto</th>
                <th className="tabla">Objetivo General</th>
                <th className="tabla">Objetivo Especifico</th>
                <th className="tabla">Presupuesto</th>
                <th className="tabla">Estado</th>
                <th className="tabla">Modificar</th>
            </tr>
            {datosTabla}
        </table>
        </div>
  }
  
  export default ProyectosLiderActivos