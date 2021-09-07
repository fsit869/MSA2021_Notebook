import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";

// Setup apollo client creds
const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache()
});

// Render app
ReactDOM.render(
    <ApolloProvider client={client}>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
    </ApolloProvider>
    ,
    document.getElementById('root')
);

