import '../../styles/Category.css';
import { useState, useContext } from 'react'
import { Context } from '../Context';
import { Link } from "react-router-dom";

export default function Firstsection ({ params, category}) {

    const { theme } = useContext(Context)
    const [ categoryNav, setCategoryNav ] = useState("editorspick")
    const [ spinner, setSpinner ] = useState(false)

    const editorspickClick = () => {
        setCategoryNav("editorspick")
        setSpinner(true)
        setTimeout( () => {
            setSpinner(false)
        },1500 )
    }

    const latestClick = () => {
        setCategoryNav("latest")
        setSpinner(true)
        setTimeout( () => {
            setSpinner(false)
        },1500 )
    }
    
  return (
    <>
       <div className='categoryfirstsecwrapper' >  
           <div className='categoryfirstsecwrapperleft' >
               <div className='editorspicklatestnav' >
                   <p className={ categoryNav === "editorspick" ? "editorspicklatestactive" : "editorspicklatestinactive" } onClick={editorspickClick} > Editor's Picks </p>
                   <p className={ categoryNav === "latest" ? "editorspicklatestactive" : "editorspicklatestinactive" } onClick={latestClick} > Latest </p>
               </div>
               <div className='editorspicklatestnews' >
                    { !spinner && category.map( (news, index) => (
                        ( index > 0 && index < 7 ) &&
                        <Link to={`/${news.category}/${news.info}`} className='categorytopleftnews' key={news.info} >
                            <h3> {news.info} </h3>
                            <h1> By <span> {news.author} </span> </h1>
                        </Link>
                   ) ) }
                   { (spinner || category.length < 1) &&
                     <div className="loaderbox2" >
                        <div className="loader" > </div>
                     </div> 
                   }
               </div>
           </div>

           <Link className='categoryfirstsecwrapperright' to={`/${params.id}/${ category.length > 0 && category[0].info}`}  >
               <img style={{ filter: `${ theme ? 'invert(1)' : 'invert(0)' }` }} src={ category.length > 0 ? category[0].img: '' } alt='' />
               <h2> { category.length > 0 && category[0].info} </h2>
               <h1> By <span> { category.length > 0 && category[0].author} </span> </h1>
               <p> Lorem ipsum dolor set iptum et rep si brum tu pu color ritre seprum probs vitri </p>
           </Link>
       </div>
    </>
  )
}

