import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux';
// import AppRouter from './router/AppRouter';
// import { Entry } from "./components";
import store from './services/redux/store'
import './index.scss';
import App from './App';

const link = new HttpLink(
  { uri: process.env.REACT_APP_LINK_API || 'http://localhost:5000/graphql' }
);

export const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache({
    addTypename: true
  }),

  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphql", graphQLErrors);
    console.log("networkgraphql", networkError);
  }
});



ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      {/* <Entry /> */}
      <App />
    </Provider>
  </ApolloProvider>
  , document.getElementById('root'));

