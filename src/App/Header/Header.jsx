// Node Packages not need realtive paths
import React from 'react';
import './Header.scss';

// this is may commponents
const Header = () => {
    return (
     <header className='Header'>

        <div className="menu">   
            
            <a href="#search"></a>
            <a href="#registr"></a>
            <a href="#bag"></a>
            <a id="#logo">logo</a>         
        </div>
       
     </header>
    );
}
// every componoyts must be exported
export default Header;