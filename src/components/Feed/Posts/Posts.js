import Post from './Post.js/Post'
import './Posts.css'

import { db } from '../../../firebase'
import { useEffect, useState } from 'react'

const Posts = () => {
    const [post, setPost] = useState([])

    useEffect(()=>{
        db.collection("posts").orderBy("timeStamp", "desc").onSnapshot(snapshot => {
            setPost(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    },[])
    return (
        <div className="posts">
            {
                post.map(({id, data})=>{
                    return <Post 
                        key = {id}
                        name = {data.name}
                        message = {data.message}
                        imageUrl = {data.photoUrl}
                        profilePic = {data.profileUrl}
                        timeStamp = {data.timeStamp}
                    />
                })
            }
        </div>
    )
}

export default Posts