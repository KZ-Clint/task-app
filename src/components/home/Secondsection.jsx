import '../../styles/Home.css';
import { entertainmentNews } from '../dummyData';
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from 'react'
import { Context } from '../Context';



export default function Secondsection () {

    const { theme } = useContext(Context)
    const [ entertainment, setEntertainment ] = useState([])
  
    useEffect(() => {
       setEntertainment(entertainmentNews)
    }, []);


  return (
    <>
       <div className='secondsectionwrapper' >
           <div className='secondsectionheadlinewrapper' >
               <h2> Entertainment </h2>
           </div>
           <div className='gennewswrapper' >
                <div className='newswrappertop' >
                       {  entertainment.map( (news) => (
                           news.topstory &&
                        <Link to={`/${news.category}/${news.info}`} className='topleftnewswrapper' key={news.info} >
                            <div>
                                <img style={{ filter: `${ theme ? 'invert(1)' : 'invert(0)' }` }} src={ news.img} alt="" />
                                <p> TOP STORY </p>
                            </div>
                            <h2> {news.info} </h2>
                            <h1> By <span> {news.author} </span> </h1>
                        </Link>
                         ) )}

                        <div className='toprightnewswrapper' >
                        {  entertainment.filter( (sp) => !sp.topstory ).map( (news, index) => (
                            index < 2 &&
                            <Link to={`/${news.category}/${news.info}`} className='toprightnews' key={news.info} >
                                <div>
                                    <img style={{ filter: `${ theme ? 'invert(1)' : 'invert(0)' }` }}  src={news.img} alt="" />
                                </div>
                                <h2> {news.info} </h2>
                                <h1> By <span> {news.author} </span> </h1>
                            </Link>
                           ) )}
                        </div>
                </div>
                <div className='newswrapperbottom' >
                  {  entertainment.filter( (sp) => !sp.topstory ).map( (news, index) => (
                        ( index > 1  && index < 7) &&
                    <Link to={`/${news.category}/${news.info}`} className='bottomnews' key={news.info} >
                        <img style={{ filter: `${ theme ? 'invert(1)' : 'invert(0)' }` }}  src={news.img} alt="" />
                        <div>
                            <h3> {news.info} </h3>
                            <h1> By <span> {news.author} </span> </h1>
                        </div>
                    </Link>
                  ) )}
                </div> 
           </div>
       </div>
    </>
  )
}

