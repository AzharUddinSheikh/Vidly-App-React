import React from 'react';
import { NavLink } from 'react-router-dom';


interface NavBarProps {
}
 
interface NavBarState {
}
 
class NavBar extends React.Component<NavBarProps, NavBarState> {
    render() { 
        return ( 
            <nav className="navbar bg-light mb-2 navbar-expand-lg">
                <NavLink className="navbar-brand" to="/">Vidly</NavLink>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-item nav-link" to="/movies">Movie</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-item nav-link" to="/rental">Rental</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-item nav-link" to="/customer">Customer</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}
 
export default NavBar;