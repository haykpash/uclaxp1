import React from 'react';
import './Nav.scss'; 

const Nav = () => {
     return (
         <nav className='Nav'>
        
         <div className="bestsell">Collections</div>
         
         <div className="links">
             <a href="#">Photos</a>
             <a href="#">Prices</a>
             <a href="#">Options</a>
         </div>
         
         </nav>
     )

};

export default Nav;