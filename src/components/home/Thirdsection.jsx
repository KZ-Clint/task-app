import '../../styles/Home.css';
import { businessNews } from '../dummyData';
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from 'react'
import { Context } from '../Context';


export default function Thirdsection () {

    const { theme } = useContext(Context)
    const [ business, setBusiness ] = useState([])
  
    useEffect(() => {
       setBusiness(businessNews)
    }, []);


  return (
    <>
       <div className='thirdsectionwrapper' >
           <div className='thirdsectionheadlinewrapper' >
               <h2> Business </h2>
           </div>
           <div className='gennewswrapper' >
                <div className='newswrappertop' >
                       {  business.map( (news) => (
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
                        {  business.filter( (sp) => !sp.topstory ).map( (news, index) => (
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
                  {  business.filter( (sp) => !sp.topstory ).map( (news, index) => (
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

