import React from 'react';
import '../Pages.scss';
import './Options.scss';
import { optionType } from './options.js';

const OptionType = () => {
    console.log('optionType', optionType);
    return optionType.map((singleOption, idx) => {
        return (
        <div className='Option'>
            <img src={ singleOption.img } alt={ singleOption.name } />
            <h3>{ singleOption.name }</h3>
        </div>
        );
    });
}

const Options = () => {
    return (
        <div className = 'Pages Options'>
            <h2>Options</h2>
            <div className='container'>
                <OptionType />
            </div>
        </div>
    );
}

export default Options;