import '../styles/Nav.css';
import { Context } from './Context';
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MailIcon from '@mui/icons-material/Mail';

export default function Nav () {

    const { sideModal, setSideModal, theme, setTheme } = useContext(Context)
  
  return (
    <>
       <nav className='navwrapper' >
           <div className='newsletterwrapper' >
             <MailIcon sx={{ color: "white" }} style={{cursor:"pointer"}} />
             <span> Subscribe to our newsletter </span>
           </div>
           <h1> Blog App </h1>
           <div className='modewrapper' >
               <label htmlFor='theme' className='labeltag' onClick={ () => { setTheme(!theme); localStorage.setItem('themeMode', JSON.stringify(!theme)); } }  > 
                  { theme ? "Light mode" : "Dark mode" } { theme ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" /> }
                </label>
                <MenuIcon sx={{ color: "white" }} onClick={ () => { setSideModal(true) } } style={{cursor:"pointer"}}  />
           </div>
       </nav>
    </>
  )
}
