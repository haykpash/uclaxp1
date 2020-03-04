import React from 'react';

import Option from './Option.jsx';

const OptionType = ({optionArrey, currCat}) => {
    return optionArrey.map((singleOption, iox) => {
    
        if (currCat === 'All' || currCat === singleOption.category) {
            return (
                <Option key={iox} singleOption={singleOption}/>
            );
        } 
    });
}

export default OptionType;