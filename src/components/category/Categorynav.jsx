import '../../styles/Category.css';
import { useState, useEffect, useContext } from 'react'
import { Context } from '../Context';


export default function Categorynav ({params}) {

    
  return (
    <>
       <div className="categorynav" >
           <h1> {params.id.charAt(0).toUpperCase()+params.id.slice(1)} </h1>
       </div>
    </>
  )
}

