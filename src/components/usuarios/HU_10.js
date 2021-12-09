import {
    useQuery,
    gql
  } from "@apollo/client";

  import '../../Style.css';
  
  const EstudiantesRegistrados = () => {
    const ESTUDIANTES = gql`
    query{
        obtenerEstudiantes{
        nombre 
        correo 
        tipo 
        estado
        }
    }
  `;
    const { loading, error, data } = useQuery(ESTUDIANTES)
    if (loading) return "<h1>Cargando</h1>"
  
    const datosTabla = data.obtenerEstudiantes.map(({ nombre, correo, tipo, estado }) => (  
      <tr>
        <td  className="tabla">{nombre}</td>
        <td  className="tabla">{correo}</td>
        <td  className="tabla">{tipo}</td>
        <td  className="tabla">{estado}</td>
        <td className="tabla"><button>Detalles</button></td>
      </tr>
    ));
  
    return <div className="centro">
                <table  className="tabla">
            
                    <tr>
                        <th className="tabla">Nombre</th>
                        <th className="tabla">Correo</th>
                        <th className="tabla">Tipo</th>
                        <th className="tabla">Estado</th>
                        <th className="tabla">Modificar</th>
                    </tr>
                    {datosTabla}
                </table>
           </div>
  }
  
  export default EstudiantesRegistrados