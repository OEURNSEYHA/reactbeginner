import React from 'react'
import '../style/Basicstyle.css';
import style from'../style/Styles.module.css';
function Basicstyle(props) {
    // let className = Style ? 'primary' : '';
   const {firstname = 0} = props;
  return (
    <div >
        <h1 className={`ont-size`}>
            hello everyone
        </h1>
        <h2 className={style.textcolor}>
            yes hi everyone  {props.name} {firstname}
        </h2>
    </div>
  )
}

export default Basicstyle