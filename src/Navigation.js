import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <div className="navigation-item">
                    <NavLink exact to="/">Home</NavLink>
                </div>
                <div className="navigation-item">
                    <NavLink to="/about">About</NavLink>
                </div>
                <div className="navigation-item">
                    <NavLink to="/jobs">Jobs</NavLink>
                </div>
            </div>
        );
    }
}

export default Navigation;
