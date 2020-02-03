import React from 'react';
import './Main.scss';
import { Switch, Route } from 'react-router-dom';

import Photos from '../Pages/Photos.jsx';
import Contacts from '../Pages/Contacts.jsx';
import Options from '../Pages/Options.jsx';

const Main = () => {
    return (
        <main className='Main'>
             <Switch>               
                <Route path='/options'>
                    <Options />
                </Route>
                <Route path='/contacts'>
                   <Contacts />
                </Route>
                <Route path='/'>
                     <Photos />
                </Route>
             </Switch>
        </main>
    )
};
export default Main;