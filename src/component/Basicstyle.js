import React from 'react'
import '../style/Basicstyle.css';
import style from'../style/Styles.module.css';
function Basicstyle({Style}) {
    let className = Style ? 'primary' : '';
  return (
    <div >
        <h1 className={`${className} font-size`}>
            hello everyone
        </h1>
        <h2 className={style.textcolor}>
            yes hi everyone
        </h2>
    </div>
  )
}

export default Basicstyle