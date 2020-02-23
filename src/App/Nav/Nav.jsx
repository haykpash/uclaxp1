import React, { useState, useEffect } from 'react';
import './Nav.scss'; 
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt} from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    const [showMenu, updateShowMenu] = useState(false);
    const handleMenubarsClick = () => {
        console.log('Menubars Click');

        if (showMenu === false) {
            updateShowMenu(true);
        } else {
            updateShowMenu(false);
        }
    }
    const handleWindowResize = () => {
        if (window.innerWidth > 599) {
            updateShowMenu(true);
        } else {
            updateShowMenu(false);
        }
    }
    useEffect(() =>{
        window.addEventListener('resize', handleWindowResize);
        handleWindowResize();
    },[]);

        return (
            <nav className='Nav'>       
                <div className="menubars" onClick={ handleMenubarsClick } >
               <FontAwesomeIcon icon={ faBars } />              
            </div>             
            <div className="leftmenu">
               <div className="left search"> <FontAwesomeIcon icon={ faSearch } /></div>
               <div className="left registr"> <FontAwesomeIcon icon={ faUserAlt } /> </div>
               <div className="left bag"> <FontAwesomeIcon icon={ faShoppingBag } /></div>       
            </div>  
            { 
                 showMenu && 
            <div className="links">
                <NavLink to='/' exact>Photos</NavLink>
                <NavLink to='/options'>Options</NavLink>
                <NavLink to='/contacts'>Contacts</NavLink>
            </div>  
            }   
        </nav>
    )
};
export default Nav;