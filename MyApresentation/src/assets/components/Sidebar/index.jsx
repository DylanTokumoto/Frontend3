import React from "react";
import SidebarContent from "../SidebarContent";

function Sidebar({ statusSidebar, setSidebar }) {

  return (
    <>
    <div className="testBTN">
      <div id="l-sidebar" className={`l-sidebar${statusSidebar ? "--open" : "--close"}`}>
        <button className="l-sidebar__btn" type="button" id="btn__close" onClick={() => { setSidebar(!statusSidebar) }} tabIndex={1}>fechar</button>
        <SidebarContent />
      </div>
      </div>
    </>
  )

}

export default Sidebar;