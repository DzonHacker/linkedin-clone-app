import './CreatePost.css'
import CloseIcon from '@material-ui/icons/Close'
import { Avatar } from '@material-ui/core'
import PublicIcon from '@material-ui/icons/Public'
import SendIcon from '@material-ui/icons/Send';
import AddIcon from '@material-ui/icons/Add';
import ImageIcon from '@material-ui/icons/Image';
import MovieIcon from '@material-ui/icons/Movie';
import DescriptionIcon from '@material-ui/icons/Description';
import { useContext, useState } from 'react';
import { db, storage } from '../../../../firebase';
import { AuthContext } from '../../../ProtectedRoute/Auth';
import firebase from 'firebase'

const CreatePost = (props) => {
    // file handler

    const [uploadImage, setUploadImage] = useState('')
    const [myTextPost, setMyTextPost] = useState('')
    const {authorizedUser} = useContext(AuthContext)
    const [myImage, setMyImage] = useState()

    const HandlePostText = (e) => {
        setMyTextPost(e.target.value)
    }

    const ImageChangeHandler = (e) => {
        
        const reader = new FileReader()
        const file = e.target.files[0]
        
        reader.onload = (function onSuccess(evt){
            return function(e){
                if(reader.readyState === 2){
                    setUploadImage(reader.result)
                    setMyImage(file)
                }
            }
            
        })(file)
        reader.readAsDataURL(file) 
    }
    const HandlePostButton = () => {
        if(myImage && myTextPost){
            HandleUploadWithTextAndImage(myImage)
        }
        if(myTextPost && !myImage){
            HandleUploadWithOnlyText()
        }
        if(myImage && !myTextPost){
            HandleUploadWithTextAndImage(myImage)
        }
        if(!myImage && !myTextPost){
            props.handleCreatePost()
        }
    }
    const HandleClose = () => {
        props.handleCreatePost()
        setMyTextPost('')
        setUploadImage('')
        setMyImage('')
    }
    const HandleUploadWithOnlyText = () => {
        db.collection("posts").add({
            name: `${authorizedUser?authorizedUser.displayName: ``}`,
            desc: '10000 followers',
            message: `${myTextPost? myTextPost : ``}`,
            photoUrl: ``,
            profileUrl: `${authorizedUser ? authorizedUser.photoURL: ``}`,
            likedBy: [],
            liked: '',
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        }).then(()=> {
            HandleClose()
            
        })
    }

    const HandleUploadWithTextAndImage = (file) => {
        const currEpoch = Math.floor(Date.now() / 1000)
        const stamp = new Date(currEpoch)
        const fileName = `${file.name}-${stamp.getTime()}`
        const uploaImage = storage.ref(`images/${fileName}`).put(file)
                                    .then(data=>{
                                        data.ref.getDownloadURL().then(url=>{
                                            db.collection("posts").add({
                                             name: `${authorizedUser?authorizedUser.displayName: ``}`,
                                             desc: '10000 followers',
                                             message: myTextPost,
                                             photoUrl: url,
                                             profileUrl: `${authorizedUser ? authorizedUser.photoURL: ``}`,
                                             likedBy: [],
                                             liked: '',
                                             timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
                                            })
                                        })
                                    }).catch(err=>{})
                                    .then(()=>{
                                        HandleClose()
                                    }    
                                )
    }
 
    return (
        <div className="createpost">
            <div className="createpost__wrapper">
                <div className="createpost__section">
                    <section className="section__top">
                        <h2>Create a Post</h2>
                        <div className="createpost__closeBtn" onClick={HandleClose}>
                            <CloseIcon />
                        </div>
                        
                    </section>
                    <div className="section__break"></div>
                    <section className="section__mid">
                        <div className="section__midTop">
                            <Avatar src={authorizedUser?authorizedUser.photoURL: ``}/>
                            <div className="section__midTopDesc">
                                <h2>{authorizedUser?authorizedUser.displayName: ``}</h2>
                                <div className="section__midTopDescPrivacy">
                                    <PublicIcon className="section__publicIcon"/>
                                    <p>Public</p>
                                </div>
                            </div>
                        </div>
                        <div className="section__midBottom">
                            <textarea className="section__midTextArea" rows="5" placeholder="What do you want to talk about? " value={myTextPost} onChange={HandlePostText}/>
                            {/* <img className="section__midUploadedPic" src="https://assets.imgix.net/hp/snowshoe.jpg" /> */}
                            <img className="section__midUploadedPic" src={uploadImage} alt=""/>
                        </div>
                    </section>
                </div>
            </div>
           <div className="bottom__section">
                <div className="bottom__sectionButtons">
                    
                    <AddIcon className="post__button"/>
                    <input type="file" id="inputFile" name="uploadImage" accept="image/*" onChange={ImageChangeHandler} onClick={(e)=>e.target.value=null}/>
                    <label htmlFor="inputFile" className="uploadImage">
                        <ImageIcon className="post__button"/>
                    </label>
                    <MovieIcon className="post__button"/>
                    <DescriptionIcon className="post__button"/>
                </div>
                <div onClick={HandlePostButton}>
                    <SendIcon className="post__buttonPost"/>
                </div>
                
           </div>
        </div>
    )
}

export default CreatePost