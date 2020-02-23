// Node Packages not need realtive paths
import React from 'react';
import './Header.scss';

// this is may commponents
const Header =  () => {
     
    return (  
     <header className='Header'>

        <div  className="menu">   
          
            <span className="logo">logo</span>         
        </div>
       
     </header>
    );
}
// every componoyts must be exported
export default Header;