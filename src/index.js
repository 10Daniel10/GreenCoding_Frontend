import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import EstudiantesRegistrados from './components/usuarios/HU_10.js';
import ProyectosLiderActivos from './components/proyectos/HU_14.js'
import CrearProyecto from './components/proyectos/HU_12.js';



const client = new ApolloClient({
  uri: 'http://localhost:3020/graphql',
  cache: new InMemoryCache()
});

const inicio = document.getElementById("root")
ReactDOM.render(
  <ApolloProvider client={client}>
    <CrearProyecto />
    <EstudiantesRegistrados />
    < ProyectosLiderActivos />
  </ApolloProvider>, inicio)