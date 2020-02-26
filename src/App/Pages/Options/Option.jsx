import React, { useState } from 'react';

import Lightbox from '../../Lightbox/Lightbox.jsx';

const Option = (props) => {
    
    const [showLightbox, setShowLightbox] = useState('false');
    
    const turnLightOn = () => {
        console.log('Turning ON');
        setShowLightbox('true');
    }
    const turnLightOff = () => {
        console.log('Turning OFF');
        setShowLightbox('false');
    }
    
    
return (
    <div className='Option'>       
        <img 
            onClick={ turnLightOn }
            src={ props.singleOption.img } 
            alt={ props.singleOption.name } />
    <h3>{ props.singleOption.name }</h3>
    <Lightbox  
    show={ showLightbox }  
    turnLightOff={turnLightOff}
    imageURL={ props.singleOption.img}
    imageAlt={ props.singleOption.name}
    />
    </div>
);
}

export default Option;