// Import React modules
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import Apoll client modules
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { ApolloProvider } from '@apollo/react-hooks';

// Import environment variable manage module
import dotenv from 'dotenv';

// Import pages
import { SearchRoom } from 'pages/SearchRoom';
import Login from 'pages/Login';
import RegisterUser from 'pages/RegisterUser';

// Import components
import GlobalStyle from 'components/GlobalStyle';

// Set Apollo client information
dotenv.config();

const httpLink = createHttpLink({ uri: process.env.REACT_APP_API_URL });
const authLink = setContext((_, { headers }) => {
    // TODO: get real token
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwibmFtZSI6IuyCrOyngOyImCIsImlhdCI6MTU3MTMwMzg0OSwiZXhwIjoxNTc5OTQzODQ5LCJpc3MiOiJib29zdC1haXJibmIiLCJzdWIiOiJ1c2VyIn0.shnHbz6gdrtojuSf9u7XRXxD_q2PsDro9tmd60yl3g8`;
    return {
        headers: {
            ...headers,
            authorization: `Bearer ${token}`,
        },
    };
});
const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
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
                    <Route path="/register" component={RegisterUser} />
                    <Route path="/search" component={SearchRoom} />
                </Switch>
            </Router>
        </ApolloProvider>
    );
};

export default App;
