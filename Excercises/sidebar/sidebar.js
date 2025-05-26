import {Menu} from "lucide-react"
import {useState} from "react";
const Sidebar=()=>{
    const [sidebarState,setSidebarState]=useState(false);
    const toggleSidebar=()=>{setSidebarState(prev=>!prev)}
    return(
        // <div className="container">
            
            <nav className={`sidebar-container ${sidebarState?"open":""}`} data-testid="sidebar">
                <button className="toggle-button" data-testid="btn-toggle"onClick={toggleSidebar}><Menu className="toggle-button-icon" data-testid="icon-menu" size={25}/></button>
                <ul className="sidebar-menu-list" data-testid="nav-menu">
                    <li className="nav-item" data-testid="nav-item-home"><a href="">Home</a></li>
                    <li className="nav-item" data-testid="nav-item-about"><a href="">About</a></li>
                    <li className="nav-item" data-testid="nav-item-services"><a href="">Services</a></li>
                    <li className="nav-item" data-testid="nav-item-contact"><a href="">Contact</a></li>
                </ul>
            </nav>
        // </div>
    )
}
export default Sidebar;