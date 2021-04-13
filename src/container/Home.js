import { useState } from 'react'
import Feed from '../components/Feed/Feed'
import CreatePost from '../components/Feed/Posts/CreatePost/CreatePost'
import Header from '../components/Header/Header'
import SideBar from '../components/SideBar/SideBar'
import Backdrop from '../components/UI/Backdrop/Backdrop'
import Modal from '../components/UI/Modal/Modal'
import Widget from '../components/widget/Widget'
import './Home.css'

const Home = () => {
    const [inputClicked, setInputClicked] = useState(false)
    const [showCreatePost, setShowCreatePost] = useState(false)
    const SearchInputHandler = () => {
        setInputClicked(true)
    }
    const BackdropHandler = () => {
        setInputClicked(false)
    }

    const TurnOnCreatePost = () => {
        setShowCreatePost(true)
    }
    const TurnOffCreatePost = () => {
        setShowCreatePost(false)
    }
    return (
        <div className="home">
            <Modal show={showCreatePost} handleCreatePost={TurnOffCreatePost}>
                <CreatePost handleCreatePost={TurnOffCreatePost}/>
            </Modal>
            <Header onInutClicked={SearchInputHandler} grow={inputClicked} />
            <Backdrop show={inputClicked} backdropClass={`backdrop`} backdropClicked={BackdropHandler}/>
            <div className="home__bodyWrapper">
                <div className="home__body">

                    {/* SideBar */}
                    <SideBar /> 
                    {/*  feed */}
                    <Feed handleCreatePost={TurnOnCreatePost}/>
                    {/*  Widgets  */}
                    <Widget />
                </div>
            </div>
        </div>
    )
}

export default Home