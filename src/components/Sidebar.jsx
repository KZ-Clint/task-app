import '../styles/Sidebar.css';
import {  useContext } from 'react'
import { Link } from "react-router-dom";
import { Context } from './Context';
import MailIcon from '@mui/icons-material/Mail';

export default function Sidebar () {

    const { sideModal, setSideModal } = useContext(Context)

  return (
    <>
    {  sideModal && 
     <>
      <div className="loaderbox" onClick={ () => { setSideModal(false) } } >
      </div>  
      <div className='sidebarwrapper' >
         <h1> Blog App </h1>
         <ul className='listwrapper'  >
            <Link className='listlink' to="/" >
              <li> Home </li>
            </Link>
            <Link className='listlink'  to="/sports" >
              <li> Sports </li>
            </Link>  
            <Link className='listlink'  to="/entertainment" >
              <li> Entertainment </li>
            </Link>
            <Link className='listlink'  to="/business" >
               <li> Business </li>
            </Link>
            <Link className='listlink'  to="/technology" >
               <li> Technology </li>
            </Link>
            <Link className='listlink'  to="/politics" >
               <li> Politics </li>
            </Link>
            <Link className='listlink'  to="/health" >
               <li> Health </li>
            </Link>
            <li className='subtonews' >  <MailIcon sx={{ color: "white" }} style={{cursor:"pointer"}} /> Subscribe to our newsletter</li>
         </ul>
      </div> 
      </>}
    </>
  )
}