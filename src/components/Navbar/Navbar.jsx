import React from 'react';
import ls from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


export const Navbar = () => {

   /* <button className={ls.item}>
    <NavLink className={navData => navData.isActive ? ls.active : ls.link} to='/fromDB'>FromDB</NavLink>
   </button> */

    return (
        <nav className={ls.nav}>

            <button className={ls.item}>
                <NavLink className={navData => navData.isActive ? ls.active : ls.link} to='fromAPI2'>From'Spoon'</NavLink>
            </button>
            <button className={ls.item}>
                <NavLink className={navData => navData.isActive ? ls.active : ls.link} to='fromAPI1'>From'TheMeal'</NavLink>
            </button>
        </nav>
    )
}
