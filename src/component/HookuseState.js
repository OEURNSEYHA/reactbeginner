import "../style/Style.css";
import { useState } from "react";

function HookuseState() {
  //  destructuring props;

  const [Sidebar, SetSidebar] = useState(false);
  const toggleSidebar = () => {
    SetSidebar(!Sidebar);
  };
  return (
    <>
      <button onClick={toggleSidebar}> Here</button>
      <div className={Sidebar ? "sidebar sidebar-open" : "sidebar"}> </div>
    </>
  );
}

export default HookuseState;
