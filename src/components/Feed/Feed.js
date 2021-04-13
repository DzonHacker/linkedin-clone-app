import { Avatar } from '@material-ui/core'
import './Feed.css'
import PhotoIcon from '@material-ui/icons/Photo'
import MovieIcon from '@material-ui/icons/Movie'
import EventIcon from '@material-ui/icons/Event'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import FeedMedia from './FeedMedia/FeedMedia'
import Posts from './Posts/Posts'
import { useContext } from 'react'
import { AuthContext } from '../ProtectedRoute/Auth'



const Feed = (props) => {
    const {authorizedUser} = useContext(AuthContext)
    const addPostHandler = (e) => {
        e.preventDefault();
        props.handleCreatePost()
    }
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <div className="feed__img">
                        <Avatar className="feed__avatar" src={`${authorizedUser ? authorizedUser.photoURL:``}`}/>
                    </div>
                    
                    <input className="feed__inputBox" type="button" value="Start a post" onClick={addPostHandler}></input>
                </div>
                <div className="feed__media">
                    <FeedMedia Icon={PhotoIcon} title="Photo" myColor={`lightskyblue`}/>
                    <FeedMedia Icon={MovieIcon} title="Video" myColor={`lightgreen`}/>
                    <FeedMedia Icon={EventIcon} title="Event" myColor={`lightsalmon`}/>
                    <FeedMedia Icon={CalendarViewDayIcon} title="Write article" myColor={`lightcoral`}/>
                </div>
            </div>
            <div className="feed__posts">
                <Posts />
            </div>
        </div>
    )
}

export default Feed