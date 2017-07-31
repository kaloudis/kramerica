import React, { Component } from 'react';
import Kramer from './images/kramer.gif';
import { NavLink } from 'react-router-dom';
import './App.css';

class NotFound extends Component {
    render() {
        return (
            <div>
                404: Page not found. <NavLink exact to="/">Head home.</NavLink>
                <img className="Kramer-404" src={Kramer} alt="Kramer" />
            </div>
        );
    }
}

export default NotFound;
