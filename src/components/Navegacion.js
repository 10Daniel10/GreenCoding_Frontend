import { Box, Button } from '@mui/material'
import React from 'react'


const pagesA = ['Usuarios', 'Proyectos'];
const pagesL = ['Usuarios', 'Proyectos', 'Inscripciones', 'Avances']
const pagesE = ['Proyectos', 'Avances']

export const Navegacion = ({tipo}) => {
let pages
    if(tipo === "Lider"){
        pages = pagesL
    } else if ( tipo === "Administrador") {
        pages = pagesA
    } else if ( tipo === "Estudiante") {
        pages = pagesE
    }

    return (
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button
            key='Inicio'
            sx={{ my: 2, color: 'white', display: 'block' }}
            href={'/'}
          >
            Inicio
          </Button>
        {pages.map((page) => (
          <Button
            key={page}
            sx={{ my: 2, color: 'white', display: 'block' }}
            href={`/${page}/${tipo}`}
          >
            {page}
          </Button>
        ))}
      </Box>
    )
}
