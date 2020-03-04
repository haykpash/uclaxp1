import React, { useState } from 'react';

import Lightbox from '../../Lightbox/Lightbox.jsx';

const Option = (props) => {
    
    const [showLightbox, setShowLightbox] = useState('false');
    
    const turnLightOn = () => {
        setShowLightbox('true');
    }
    const turnLightOff = () => {
        setShowLightbox('false');
    }
    
    return (
        <div className='Option'>       
            <img 
                onClick={ turnLightOn }
                src={ props.singleOption.img } 
                alt={ props.singleOption.name } />
        <h3>{ props.singleOption.name }: Category: {props.singleOption.category}</h3>
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