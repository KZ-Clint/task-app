import { Context } from '../components/Context';
import Breaknews from '../components/home/Breaknews';
import Firstsection from '../components/home/Firstsection';
import Secondsection from '../components/home/Secondsection';
import Thirdsection from '../components/home/Thirdsection';

import '../styles/Home.css';
import React, { useEffect, useContext } from 'react';


export default function Home () {
  
  const { setSideModal } = useContext(Context)

  useEffect( ( ) => {
    setSideModal(false)
 },[] )

  return (
    <>
      <div className="homewrapper" >
          <Breaknews/>
          <Firstsection/>
          <Secondsection/>
          <Thirdsection/>
      </div>
    </>
  )
}
