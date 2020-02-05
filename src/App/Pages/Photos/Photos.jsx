import React from 'react';
import '../Pages.scss';
import Tabbed from './Tabbed/Tabbed.jsx';
import Colors from './Colors/Colors.jsx';

const Photos = () => {
    return (
        <div className = { 'Pages Photos' }>
            Photos

            <Tabbed/>

            <Colors />

            <div className="colums">

                 <div className="col col1">col1</div>
                 <div className="col col2">col2</div>
                 <div className="col col3">col3</div>
                 <div className="col col4">col4</div>

                </div>
        </div>  
    );
}
export default Photos;