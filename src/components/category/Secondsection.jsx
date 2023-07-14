import '../../styles/Category.css';
import { useContext } from 'react'
import { Context } from '../Context';
import { Link } from "react-router-dom";

export default function Secondsection ({params, category}) {

    const { theme } = useContext(Context)
    
  return (
    <>
       <div className='categorysecondsecwrapper' >  
            <div className="secondcategorynav" >
                <h1> More from {params.id.charAt(0).toUpperCase()+params.id.slice(1)} </h1>
            </div>
            <div className='morefromwrapper' >
                  {  category.map( (news, index) => (                    
                    <Link to={`/${news.category}/${news.info}`} className='morefromnews' key={news.info} >
                        <div>
                            <h1> {news.date} </h1>
                            <h3> {news.info} </h3>
                            <p> Lorem ipsum dolor set iptum et rep si brum tu pu color ritre seprum probs vitri </p>
                        </div>
                        <img style={{ filter: `${ theme ? 'invert(1)' : 'invert(0)' }` }}  src={news.img} alt="" />
                    </Link>
                  ) )}
            </div> 
       </div>
    </>
  )
}

