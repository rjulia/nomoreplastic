import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux';
// import AppRouter from './router/AppRouter';
import store from './services/redux/store'
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

let linkApi;

if (process.env.NODE_ENV === 'production') {
  linkApi = "https://cmsnoplastic.herokuapp.com/graphql";
} else {
  linkApi = "http://localhost:5000/graphql";
}

const link = new HttpLink(
  { uri: linkApi }
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
      <App />
    </Provider>
  </ApolloProvider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
