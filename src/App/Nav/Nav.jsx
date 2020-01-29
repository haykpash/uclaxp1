import React, { useState, useEffect } from 'react';
import './Nav.scss'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt} from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';



const Nav = () => {

    const [showMenu, updateShowMenu] = useState(true);
    const [isSmall, updateIsSmall] = useState(true)

    const handleMenubarsClick = () => {
        console.log('You hit the menubars')

          let timbuktu;

          if(showMenu === true) {
              timbuktu = false;
          } else {
              timbuktu = true;
          }
          updateShowMenu(timbuktu);
    
    } // Chexling for s.all view or Medium/Large
        const handleIsSmall = () => {
            console.log('isSmall', isSmall);

            if (window.innerWidth > 599) {
                updateIsSmall(false);
                updateShowMenu(true);
            } else {
                updateIsSmall(true);
                updateShowMenu(false);
            }
        }
        useEffect(()=>{
            window.addEventListener('resize', handleIsSmall);
            handleIsSmall();
        }, []);
        return (
         <nav className='Nav'>

                {
                 isSmall &&
            <div className="menubars" onClick={ handleMenubarsClick } >
               <FontAwesomeIcon icon={ faBars } />              
            </div>
            } 
            
            <div className="leftmenu">
               <div className="left search"> <FontAwesomeIcon icon={ faSearch } /></div>
               <div className="left registr"> <FontAwesomeIcon icon={ faUserAlt } /> </div>
               <div className="left bag"> <FontAwesomeIcon icon={ faShoppingBag } /></div>       
            </div>
            

            {
              showMenu &&
            <div className="links">
                <a href="#">Photos</a>
                <a href="#">Prices</a>
                <a href="#">Options</a>
            </div>
              }
        </nav>
    )
};

export default Nav;