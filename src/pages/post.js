import { Context } from '../components/Context';
import '../styles/Post.css';
import React, { useEffect, useContext, useState } from 'react';
import { useParams } from "react-router-dom";
import { businessNews, entertainmentNews, sportsNews } from '../components/dummyData';
import Postsection from '../components/post/Postsection';
import Commentsection from '../components/post/Commentsection';


export default function Post () {
  
  const { setSideModal } = useContext(Context)
  const params = useParams()
  const [ post, setPost ] = useState({})
  const [ content, setContent ] = useState("")
  const [ comments, setComments ] = useState([])

  
  useEffect( ( ) => {
      setPost((params.id === "business" ? businessNews : params.id === "sports" ? sportsNews : params.id === "entertainment" ? entertainmentNews :
     sportsNews).find( (news) => news.info === params.ids ) )
    setSideModal(false)
 },[] )

 const onPostHandle = () => {
  if(!content) return
     const newComment = {  content, img:"/assets/sports.jpg", author:"Test user", date: new Date().toISOString(), likes:[], unique:Math.floor(Math.random() * 10000 ) }
     console.log(newComment)
     setComments([...comments, newComment])
     setContent("")
 }

 const deletePostHandle = (comment) => {
    const newComment = comments.filter( (cm) => {
          return cm.unique !== comment.unique
    } )
    setComments(newComment)
}

const likePostHandle = (comment) => {
  const newComment = comments.filter( (cm) => {
        if(comment.unique === cm.unique ) {
             cm.likes = [ ...cm.likes, 1 ]
        }
        return cm
  } )
  setComments(newComment)
}

const unLikePostHandle = (comment) => {
  const newComment = comments.filter( (cm) => {
        if(comment.unique === cm.unique ) {
             cm.likes = cm.likes.filter( (li) => li !== 1 )
        }
        return cm
  } )
  setComments(newComment)
}

  return (
    <>
      <div className="postwrapper" >
          <Postsection comments={comments} post={post} />
          <Commentsection content={content} setContent={setContent} onPostHandle={onPostHandle} comments={comments} deletePostHandle={deletePostHandle}
          likePostHandle={likePostHandle} unLikePostHandle={unLikePostHandle} />
      </div>
    </>
  )
}
