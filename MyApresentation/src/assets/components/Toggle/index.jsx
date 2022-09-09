
function Toggle ({statusSidebar, setSidebar}) {

    return(
        <button className="l-sidebar__btn" type="button" onClick={() => {setSidebar(!statusSidebar)}} tabIndex={1}>Menu</button>
    )
}

export default Toggle;