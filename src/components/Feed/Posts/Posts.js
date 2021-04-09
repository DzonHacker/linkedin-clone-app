import Post from './Post.js/Post'
import './Posts.css'

import { db } from '../../../firebase'
import { useEffect, useState } from 'react'
import { ContactPhoneSharp, SettingsInputCompositeSharp } from '@material-ui/icons'

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
    console.log(post)
    return (
        <div className="posts">
            {
                post.map(({id, data})=>{
                    return <Post 
                        key = {id}
                        name = {data.name}
                        message = {data.message}
                        imageUrl = {data.photoUrl}
                        timeStamp = {data.timeStamp}
                    />
                    
                    console.log(data)
                })
            }
        </div>
    )
}

export default Posts