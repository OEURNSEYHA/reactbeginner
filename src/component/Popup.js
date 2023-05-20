import React from "react";
import "../style/Style.css";
function Popup({ toggle, Set }) {
  return (
    <div className={toggle ? "popup popup-open" : "popup"} onClick={Set}></div>
  );
}

export default Popup;
