// Node Packages not need realtive paths
import React from 'react';
import './Header.scss';

// this is may commponents
const Header = () => {
    return (
     <header className='Header'>

        <div className="menu">   
            <a href="#menuu">menu</a> 
            <a id="#logo">logo</a> 
            <div className="menu-right"> 
              <a href="#search">search</a>
              <a href="#registr">register</a>
              <a href="#bag">bag</a>
            </div> 
        </div>
       
     </header>
    );
}
// every componoyts must be exported
export default Header;