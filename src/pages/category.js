import { Context } from '../components/Context';
import Categorynav from '../components/category/Categorynav';
import '../styles/Category.css';
import React, { useEffect, useContext, useState } from 'react';
import { useParams } from "react-router-dom";
import { businessNews, entertainmentNews, sportsNews } from '../components/dummyData';
import Firstsection from '../components/category/Firstsection';
import Secondsection from '../components/category/Secondsection';

export default function Category () {
  
  const { setSideModal } = useContext(Context)
  const params = useParams()
  const [ category, setCategory ] = useState([])

  useEffect( ( ) => {
    setSideModal(false)
    setCategory( params.id === "sports" ? sportsNews : params.id === "business" ? businessNews : params.id === "entertainment" ? entertainmentNews : businessNews )
  },[params] )



  return (
    <>
      <div className="categorywrapper" >
           <Categorynav params={params} />
           <Firstsection params={params} category={category} />
           <Secondsection params={params} category={category} />
      </div>
    </>
  )
}
