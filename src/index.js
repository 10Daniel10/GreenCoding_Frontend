import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
//import Proyectos from './components/Proyectos';
import CrearProyecto from './components/proyectos/HU_12.js';


const client = new ApolloClient({
  uri: 'http://localhost:3020/graphql',
  cache: new InMemoryCache()
});

const inicio = document.getElementById("root")
ReactDOM.render(
  <ApolloProvider client={client}>
    <CrearProyecto />
  </ApolloProvider>, inicio)
