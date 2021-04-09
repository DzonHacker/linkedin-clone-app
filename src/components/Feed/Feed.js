import { Avatar } from '@material-ui/core'
import './Feed.css'
import PhotoIcon from '@material-ui/icons/Photo'
import MovieIcon from '@material-ui/icons/Movie'
import EventIcon from '@material-ui/icons/Event'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import FeedMedia from './FeedMedia/FeedMedia'
import Posts from './Posts/Posts'
import { db } from '../../firebase'
import firebase from 'firebase'
const Feed = () => {
    const addPostHandler = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            name: 'John Sherchan',
            desc: '10000 followers',
            message: 'This is test post',
            photoUrl: 'https://i.pinimg.com/originals/73/f9/fd/73f9fd3b1c381c0cabb3ad497cf4e237.jpg',
            profileUrl: '',
            likedBy: [],
            liked: '',
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
    }
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <div className="feed__img">
                        <Avatar className="feed__avatar" />
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