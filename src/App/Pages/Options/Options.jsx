import React, {useState, useEffect} from 'react';
import '../Pages.scss';
import './Options.scss';
import API from '../../common/API.js';

const OptionType = () => {

   // 1 SET UP STATE TO KEEP TRAK OF DATA FROM SERVER
   const [singleOption, setsingleOption] = useState([]);
   //ONLY DO THIS ON MOMENT.
   useEffect(() => {
   // 2. RETRIEVE THE DATA FROM THE SERVER
   API.get('options/gallery').then((result) => {
       // 2. UPDATE OPTIONtYPE with data form server
       console.log('Option Response', result);
       setsingleOption(result.data);
   });
},[])
    return singleOption.map((singleOption, iox) => {
        return (
        <div key={ iox }  className='Option'>
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