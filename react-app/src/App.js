// Import React modules
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import Apoll client modules
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import { ApolloProvider } from '@apollo/react-hooks';

// Import environment variable manage module
import dotenv from 'dotenv';

// Import pages
import { SearchRoom } from 'pages/SearchRoom';
import Login from 'pages/Login';
import RegisterUser from 'pages/RegisterUser';

// Import components
import GlobalStyle from 'components/GlobalStyle';

import { getToken } from 'service/TokenManager';

// Set Apollo client information
dotenv.config();

const httpLink = createHttpLink({ uri: process.env.REACT_APP_API_URL });
const authLink = setContext((_, { headers }) => {
    const token = getToken();
    return {
        headers: {
            ...headers,
            authorization: `Bearer ${token}`,
        },
    };
});
const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
            console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
        );
    if (networkError) console.log(`[Network error]: ${networkError}`);
});
const apolloClient = new ApolloClient({
    link: errorLink.concat(authLink.concat(httpLink)),
    cache: new InMemoryCache(),
});

// App
const App = () => {
    return (
        <ApolloProvider client={apolloClient}>
            <Router>
                <GlobalStyle />
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/user/register" component={RegisterUser} />
                    <Route path="/main" component={SearchRoom} />
                </Switch>
            </Router>
        </ApolloProvider>
    );
};

export default App;
