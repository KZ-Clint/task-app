import '../../styles/Home.css';
import { breakingNews } from '../dummyData';
import { Link } from "react-router-dom";

export default function Breaknews () {


  return (
    <>
       <div className='genbreakingnewswrapper' >
         { breakingNews.map( (news) => (  
           <Link to={`/${news.category}/${news.info}`} className='mainbreakingnewswrapper' key={news.info} >
               <span> BREAKING </span>
               <div>
                   <h1> {news.date} </h1>
                   <p>  {
                            news.info.length < 70 ? news.info : 
                            news.info.slice(0, 70) + '....'
                        } 
                  </p>
               </div>
           </Link>
         ) )  }
       </div>
    </>
  )
}

