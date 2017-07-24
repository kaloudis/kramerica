import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Navigation from './Navigation.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Kramerica Industries</h2>
                    <Navigation />
                </div>
                <p className="App-intro">
                    {this.props.children}
                </p>
            </div>
        );
    }
}

App.PropTypes = {
    children: PropTypes.node
}

export default App;