import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';import App from './App';
import Home from './Home';
import About from './About';
import Jobs from './Jobs';
import NotFound from './404';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <App>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/jobs" component={Jobs} />
                <Route path="/404" component={NotFound} />
                <Redirect to="/404" />
            </Switch>
        </App>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
