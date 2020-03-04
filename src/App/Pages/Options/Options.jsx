import React, {useState, useEffect} from 'react';
import '../Pages.scss';
import './Options.scss';
import API from '../../common/API.js';
import Categories from './Categories.jsx';
import OptionType from './Optionlist.jsx';

    const Options = () => {
        const [optionArrey, setoptionArrey] = useState([]);
        const [categories, setCategories] = useState([]);
        const [currCat, setCurrCat] = useState('All');
    
    useEffect(() => {
        // 2. RETRIEVE THE DATA FROM THE SERVER
        API.get('options/categories').then((result) => {
            // 2. UPDATE OPTIONtYPE with data form server
            console.log('Categories Response', result);
            setCategories(result.data);
        });
        API.get('options/gallery').then((result) => {
            // 2. UPDATE OPTIONtYPE with data form server
            console.log('Option Response', result);
            setoptionArrey(result.data);
        });
    },[])

    return (
        <div className = 'Pages Options'>
            <h2>Options</h2>
            <Categories 
                categories={categories} 
                currCat={currCat}
                setCurrCat={setCurrCat}
                />
            <div className='container'>
                <OptionType 
                optionArrey={optionArrey} 
                currCat={currCat}
                />
            </div>
        </div>
    );
}
export default Options;