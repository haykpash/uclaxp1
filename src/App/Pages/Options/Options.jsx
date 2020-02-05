import React from 'react';
//import '../Pages.scss';
import './Options.scss';
import { optionType } from './options.js';

const OptionType = () => {
    return optionType.map((optionType, idx) => {
        return (
        <div  key={ idx } className={ 'OptionType' }>
            <img src={ optionType.img } alt={optionType.name } />
            <h3>{ optionType.name }</h3>
        </div>
        );
    });
}

const Options = () => {
    return (
        <div className = 'Options'>
            <h2>Options</h2>
            <OptionType />
        </div>
    );
}

export default Options;