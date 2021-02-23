import React from 'react';
import {FaTimes} from 'react-icons/fa';
import sublinks from './data';
import {useGlobalContext} from './context';


const Sidebar = () => {
    const {isSidebarOpen, closeSidebar} = useGlobalContext();
    return( <aside className={`${isSidebarOpen ? 'sidebar-wrapper show':'sidebar-wrapper'}`}>
        <div className="sidebar">
            <button className="close-btn" onClick={closeSidebar}><FaTimes/></button>
            <div className="sidebar-links">
                {sublinks.map((item,index)=>{
                    const {links, page} = item;
                    return (
                        <article key={index}>
                        <a key={index} href="#">
                        <h4 className="h-page">{page}</h4>
                        </a>
                        </article>
                    )
                })}
            </div>
            <button className="log-btn">Login</button>
            <button className="btn sig-btn"><a className="btn sig-btn" href="#">Sign Up</a></button>
        </div>
    </aside>
    );
}

export default Sidebar;