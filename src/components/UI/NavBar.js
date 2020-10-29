import React, { useState } from 'react';
import {
    NavLink
} from "react-router-dom";
  
import './NavBar.css'
const NavBar = () => {
        
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        console.log('cambio')
        setOpen(!open);
    }
    return (
        <header>
        <div className="contenedor">
            <div className="brand">
                <span>Negocios On Line</span>
            </div>

            <button
                className="button-menu"
                onClick={ handleClick }
            >
                <div className={(open)?'menu-open':'menu-toggle'}>
                    <div className="hamburger"></div>
                </div>
            </button>
        </div>

        <nav 
            className={(open)?'navegador open':'navegador'}
            onClick={ () => setOpen(false) }
        >
            <ul>
                <li className="nav-item"
                onClick={ () => setOpen(false) }>
                    <NavLink
                        className="nav-item nav-link"
                        activeClassName="active"
                        exact
                        to="/"
                        onClick={ handleClick }
                    >
                        Home
                    </NavLink>
                </li>
                {/* <li className="nav-item">
                    <NavLink
                        className="nav-item nav-link" 
                        activeClassName="active"
                        exact
                        to="/about"
                        onClick={ () => console.log('object') }
                    >
                        About
                    </NavLink>
                </li> */}
                <li className="nav-item">
                    <NavLink
                        className="nav-item nav-link" 
                        activeClassName="active"
                        exact
                        to="/contact"
                        onClick={ () => console.log('object') }
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
		
	</header>
    )
}

export default NavBar;
