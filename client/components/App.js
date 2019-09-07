import React from 'react';
import Header from './Header';
const App =  (props) =>{
    return(
        <div className="container">
            <Header></Header> 
            {props.children}
        </div>
    )
}
module.exports = App
