import React from 'react';
import {NavLink} from 'react-router-dom'
export const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <NavLink className="navbar-brand" to={'/'}>Third</NavLink>
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <NavLink className="nav-link" to={'/'}>Home</NavLink>
                </li>
                <li className="nav-item active">
                    <NavLink className="nav-link" to={'/user'}>User</NavLink>
                </li>
                <li className="nav-item active">
                    <NavLink className="nav-link" to={'/counter'}>Counter</NavLink>
                </li>
                <li className="nav-item active">
                    <NavLink className="nav-link" to={'/get'}>Get</NavLink>
                </li>
            </ul>
        </nav>
    );
};
