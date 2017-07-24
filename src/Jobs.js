import React, { Component } from 'react';
import './App.css';
import JobsNavigation from './JobsNavigation.js';
import Intern from './Intern';
import Scientist from './Scientist';
import Engineer from './Engineer';
import { Route, Switch, Redirect } from 'react-router-dom';

class Jobs extends Component {
    render() {
        return (
            <div>
                Here are our open positions
                <JobsNavigation />
                <Switch>
                    <Route exact path="/jobs" />
                    <Route path="/jobs/intern" component={Intern} />
                    <Route path="/jobs/scientist" component={Scientist} />
                    <Route path="/jobs/engineer" component={Engineer} />
                    <Redirect to="/404" />
                </Switch>
            </div>
        );
    }
}

export default Jobs;
