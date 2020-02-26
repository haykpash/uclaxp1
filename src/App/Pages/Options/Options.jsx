import React, {useState, useEffect} from 'react';
import '../Pages.scss';
import './Options.scss';
import API from '../../common/API.js';

import Option from './Option.jsx';

const OptionType = () => {

    // 1 SET UP STATE TO KEEP TRAK OF DATA FROM SERVER
    const [singleOptions, setsingleOptions] = useState([]);
    //ONLY DO THIS ON MOMENT.
    useEffect(() => {
        // 2. RETRIEVE THE DATA FROM THE SERVER
        API.get('options/gallery').then((result) => {
            // 2. UPDATE OPTIONtYPE with data form server
            console.log('Option Response', result);
            setsingleOptions(result.data);
        });
    },[])

    return singleOptions.map((singleOption, iox) => {
        return (
            <Option key={iox} singleOption={singleOption}/>
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