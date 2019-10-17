import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SearchRoom from 'pages/SearchRoom';

import GlobalStyle from 'components/GlobalStyle';

const App = () => {
    return (
        <Router>
            <GlobalStyle />
            <Switch>
                <Route exact path="/" component={SearchRoom} />
            </Switch>
        </Router>
    );
};

export default App;
