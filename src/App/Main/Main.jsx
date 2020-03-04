import React from 'react';
import './Main.scss';
import { Switch, Route } from 'react-router-dom';

import Photos from '../Pages/Photos/Photos.jsx';
import Options from '../Pages/Options/Options.jsx';
import Contacts from '../Pages/Contact/Contact.jsx';
import Login from '../Pages/Login/Login.jsx';

const Main = () => {
    return (
        <main className='Main'>
            <Switch>   
                <Route path='/login'>
                    <Login />
                </Route>            
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