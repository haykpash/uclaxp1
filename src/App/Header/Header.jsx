// Node Packages not need realtive paths
import React from 'react';
import './Header.scss';

// this is may commponents
const Header = () => {
    return (
     <header className='Header'>

        <div className="menu">
        
            <a href="menuu">menu</a> 
            <a href="logo">logo</a>
            <a href="search">search</a>
        </div>
       
     </header>
    );
}
// every componoyts must be exported
export default Header;