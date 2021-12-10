import { useQuery, gql, useMutation } from "@apollo/client"
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from '@mui/material/Button';
import TablePagination from '@mui/material/TablePagination';

const GET_PROYECTOS = gql`
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

const MUTATION_ESTADO = gql`
mutation($idProyecto: String!, $estado: String!){
setEstadoProyecto(idProyecto: $idProyecto, estado: $estado)
}
`;

const MUTATION_FASE = gql`
  mutation($idProyecto: String!, $fase: String!) {
  setFaseProyecto(idProyecto: $idProyecto, fase: $fase)
}
`

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  const [cambiarEstadoProyecto, { loading: loadingEstado }] = useMutation(MUTATION_ESTADO, {
    refetchQueries: [
      GET_PROYECTOS, // DocumentNode object parsed with gql
      'obtenerProyectos' // Query name
    ],
  })

  const [terminarProyecto, { loading: loadingFase }] = useMutation(MUTATION_FASE, {
    refetchQueries: [
      GET_PROYECTOS, // DocumentNode object parsed with gql
      'obtenerProyectos' // Query name
    ],
  })

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.idProyecto}
        </TableCell>
        <TableCell align="right">{row.nombreProyecto}</TableCell>
        <TableCell align="right">{row.estado}</TableCell>
        <TableCell align="right">{row.fase}</TableCell>
        <TableCell align="right">{row.fechaInicio}</TableCell>
        <TableCell align="right">{row.fechaTermina}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <center>
                <h5>Detalles</h5>
                </center>
              <ul className="list-grout list-group-flush">
                <li className="list-group-item">
                  <b>Nombre Proyecto:</b> {row.nombreProyecto}
                </li>
                <li className="list-group-item">
                  <b>Objetivo General:</b> {row.objGeneral}
                </li>
                <li className="list-group-item">
                  <b>Objetivos Especificos:</b> {row.objEspecifico}
                </li>
                <li className="list-group-item">
                  <b>Presupuesto:</b> {row.presupuesto}
                </li>
                <li className="list-group-item">
                  <b>Lider:</b> {row.lider?.nombre}
                  <br />
                  <b>ID:</b> {row.lider?.id}
                </li>
                <li className="list-group-item">
                  <b>Estudiantes Inscritos:</b>
                </li>
                <Table size="small" aria-label="a dense table">
                <TableHead>
                <TableRow>
                 
                        <TableCell><b>ID</b></TableCell>
                        <TableCell><b>Nombre</b></TableCell>
                        <TableCell><b>Estado</b></TableCell>
                       
                        </TableRow>
                    </TableHead>
                    <TableBody>
                      {row?.estudiantesInscritos.map((post) => (
                          <TableRow
                          key={row.idProyecto}
                          sx={{ '&:last-child TableCell, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{post.estudiante.id}</TableCell>
                            <TableCell>{post.estudiante.nombre}</TableCell>
                            <TableCell>{post.estado}</TableCell>
                          </TableRow>

                        ))}
                    </TableBody>
                  </Table>
              
                  </ul>
              <center>
                <h5>Actualizar</h5>



                <Button onClick={() => cambiarEstadoProyecto({
                  variables: {
                    idProyecto: row.idProyecto,
                    estado: "Activo"
                  }
                })}
                  disabled={(row.estado == "Activo" || row.fase == "Terminado") ? true : false}
                >
                  Activar
                </Button>
                <Button onClick={() => cambiarEstadoProyecto({
                  variables: {
                    idProyecto: row.idProyecto,
                    estado: "Inactivo"
                  }
                })}
                  disabled={row.estado == "Inactivo" ? true : false}
                >
                  Inactivar
                </Button>
                <Button onClick={() => terminarProyecto({
                  variables: {
                    idProyecto: row.idProyecto,
                    fase: "Terminado"
                  }
                })}
                  disabled={row.fase != "EnDesarrollo" ? true : false}
                >
                  Terminar
                </Button>
              </center>
              {loadingEstado ? (<p>actualizando estado ...</p>) : ""}
              {loadingFase ? (<p>actualizando fase ...</p>) : ""}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    idProyecto: PropTypes.string.isRequired,
    nombreProyecto: PropTypes.string.isRequired,
    fase: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
    fechaInicio: PropTypes.string,
    objGeneral: PropTypes.string,
    objEspecifico: PropTypes.string,
    fechaTermina: PropTypes.string,
    lider: PropTypes.objectOf(
      PropTypes.shape({
        nombre: PropTypes.string,
        id: PropTypes.string,
      }),
    ),
    estudiantesInscritos: PropTypes.arrayOf(
      PropTypes.shape({
        estudiante: PropTypes.objectOf({
          nombre: PropTypes.string,
          id: PropTypes.string,
        }),
        estado: PropTypes.string,
      })),
  }).isRequired,
};


export const AProyectos = () => {

  const { loading, data } = useQuery(GET_PROYECTOS);

  console.log(data)

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data?.obtenerProyectos.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };



  return (
    <div class="container">
      <center>
        <h1>
          Proyectos
        </h1>
      </center>
      {loading ? (
        <h3>cargando proyectos...</h3>
      ) : (
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell><b>ID</b></TableCell>
                <TableCell align="right"><b>Nombre</b></TableCell>
                <TableCell align="right"><b>Estado</b></TableCell>
                <TableCell align="right"><b>Fase</b></TableCell>
                <TableCell align="right"><b>Fecha de Inicio</b></TableCell>
                <TableCell align="right"><b>Fecha Finalizado</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? data.obtenerProyectos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : data.obtenerProyectos
              ).map((row) => (
                <Row key={row.idProyecto} row={row} />
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                  count={data.obtenerProyectos.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>)}



    </div>
  );
}