import React from 'react';
import './Colors.scss';
//import '../Pages.scss';
import { colorType } from './colors.js';

const ColorType = () => {
    return colorType.map((colorType, idx) => {
        return (
        <div  key={ idx } className={ 'ColorType' }>
            <img src={ colorType.img } alt={colorType.name } />
            <h3>{ colorType.name }</h3>
        </div>
        );
    });
}


const Colors = () => {
    return (
        <div className='Colors'>
          <h2>Colors</h2>
          <div className='separate'>
          <ColorType />
          </div>
        </div>
    )
}

export default Colors;