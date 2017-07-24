import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

class JobsNavigation extends Component {
    render() {
        return (
            <div className="navigation">
                <div className="navigation-item">
                    <NavLink to="/jobs/intern">Intern</NavLink>
                </div>
                <div className="navigation-item">
                    <NavLink to="/jobs/scientist">Materials Scientist</NavLink>
                </div>
                <div className="navigation-item">
                    <NavLink to="/jobs/engineer">Engineer</NavLink>
                </div>
            </div>
        );
    }
}

export default JobsNavigation;
