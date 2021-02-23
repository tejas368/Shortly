import React from 'react'
import logo from "./images/logo.svg";
import {FaBars} from 'react-icons/fa';
import { useGlobalContext} from "./context";

const Navbar = () => {
    const {openSidebar, openSubmenu, closeSubmenu} = useGlobalContext();
    
    const displaySubmenu = (e) =>{
        const page = e.target.textContent;
        const tempbtn = e.target.getBoundingClientRect();
        const center = (tempbtn.left + tempbtn.right)/2;
        const bottom = tempbtn.bottom - 3;
        console.log(page, tempbtn)
        openSubmenu(page, { center, bottom });
    }

    const handleSubmenu = (e) =>{
        if(!e.target.classList.contains('link-btn')){
            closeSubmenu();
        }
    }
    return <nav className="nav" onMouseOver={handleSubmenu}>
                <div className="nav-center">
                    <div className="nav-header">
                        <img src={logo} className="nav-logo" alt="shortly"/>
                        <button className="btn toggle-btn" onClick={openSidebar}>
                            <FaBars/>
                        </button>
                    </div>
                    <ul className="nav-links">
                        <li>
                            <button className="link-btn" onMouseOver={displaySubmenu}>
                                Features
                            </button>
                        </li>
                        <li>
                            <button className="link-btn" onMouseOver={displaySubmenu}>
                                Resources
                            </button>
                        </li>
                        <li>
                            <button className="link-btn" onMouseOver={displaySubmenu}>
                                Company
                            </button>
                        </li>
                    </ul>
                    <div className="both-btn">
                        <a href="#"><button className="login-btn nav-links">Login</button></a>
                        <button className="btn signin-btn">Sign in</button>
                    </div>
            </div>
    </nav>
}

export default Navbar;