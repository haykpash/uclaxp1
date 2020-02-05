import React, { useState } from 'react';
import './Tabbed.scss';

const tabItems = [
    {
        image: '/img/Photos/grey.jpg',
        title: 'Grey',
        text: 'This is the Grey color content.',
    },
    {
        image: '/img/Photos/ivory.jpg',
        title: 'Ivory',
        text: 'This is the Ivory color content.',
    },
    {
        image: '/img/Photos/green.jpg',
        title: 'Green',
        text: 'This is the Green color content.',
    },
];

const Tabbed = () => {

    const [currentTab, setCurrentTab] = useState(tabItems[0]);

    const isGrey = (currentTab.title === 'Grey') ? 'tab active':'tab';
    const isIvory = (currentTab.title === 'Ivory') ? 'tab active':'tab';
    const isGreen = (currentTab.title === 'Green') ? 'tab active':'tab';

    return (
        <div className={ 'Tabbed' }>

            <div className="tabs">
                <div onClick={ () => { setCurrentTab(tabItems[0]) } } className={ isGrey }  >Grey</div>
                <div onClick={ () => { setCurrentTab(tabItems[1]) } } className={ isIvory } >Ivory</div>
                <div onClick={ () => { setCurrentTab(tabItems[2]) } } className={ isGreen } >Green</div>
            </div>

            <div className="content">
                <img src={ currentTab.image } alt={currentTab.title}/>
                <h2>{ currentTab.title }</h2>
                <p>{ currentTab.text }</p>
            </div>
        </div>
    )
}

export default Tabbed;