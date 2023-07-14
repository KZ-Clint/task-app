import '../../styles/Post.css';
import { useContext } from 'react'
import { Context } from '../Context';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Commentsection ({content, setContent, onPostHandle, comments, deletePostHandle, likePostHandle, unLikePostHandle}) {

    const { theme } = useContext(Context)

    
  return (
    <>
       <div className='commentsectionwrapper' >  
           <div className='commentsectionnav' >
               <h3> {comments.length} Comments </h3>
           </div>
           <div className='maincommentsectionwrapper'  >
               <div className='inputwrapper'   >
                  <input type="text" placeholder='Add your comments...' value={content} onChange={ (e) => { setContent(e.target.value) } } />
                  <button className='postbtn' onClick={onPostHandle} > Post </button>
               </div>

               <div className='gencommentswrapper' >
                   {  comments.map( (cm, index) => (
                        <div className='commentswrapper' key={index} >
                            <img style={{ filter: `${ theme ? 'invert(1)' : 'invert(0)' }` }}  src={cm.img} alt="" />
                            <div className='namecommentwrapper' >
                                <span> {cm.author} </span>
                                <p> {cm.content} </p>
                                <div  className='likedeletewrapper' >
                                    <div onClick={ () => { cm.likes.length > 0 ? unLikePostHandle(cm) : likePostHandle(cm) } } > <FavoriteBorderIcon fontSize="small" /> {cm.likes} </div>
                                    <div onClick={ () => { deletePostHandle(cm)  } } > <DeleteIcon fontSize="small" />  </div>
                                </div>
                            </div>   
                        </div>
                   ) ) }
               </div>
           </div>
       </div>
    </>
  )
}

