import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache
} from "@apollo/client"
import MenuAppBar from './components/MenuPrincipal';

const client = new ApolloClient({
  uri: 'http://localhost:3020/graphql',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <MenuAppBar />
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);


