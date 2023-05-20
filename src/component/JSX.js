import React from 'react'
import'../style/Style.css';

function JSX(){
//   return (
//     <div>
//         <h1> Hello seyha</h1>
//     </div>
//   )
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {class:'name'}, 
            'click her' )
        );
    
}

export default JSX;