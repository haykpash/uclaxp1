import React, { useState } from 'react';
import './Tabbed.scss';

const tabItems = [
    {
        image: '/img/grey.jpg',
        title: 'Grey',
        text: 'This is the Grey color content.',
    },
    {
        image: '/img/ivory.jpg',
        title: 'Ivory',
        text: 'This is the Ivory color content.',
    },
    {
        image: '/img/green.jpg',
        title: 'Green',
        text: 'This is the Green color content.',
    },
];

const Tabbed = () => {

    const [currentTab, setCurrentTab] = useState(tabItems[1]);

    return (
        <div className={ 'Tabbed' }>

            <div className="tabs">
                <div onClick={ () => { setCurrentTab(tabItems[0]) } } className="tab tab1">Grey</div>
                <div onClick={ () => { setCurrentTab(tabItems[1]) } } className="tab tab2">Ivory</div>
                <div onClick={ () => { setCurrentTab(tabItems[2]) } } className="tab tab3">Green</div>
            </div>

            <div className="content">
                <img src={ currentTab.image }/>
                <h2>{ currentTab.title }</h2>
                <p>{ currentTab.text }</p>
            </div>
        </div>
    )
}

export default Tabbed;