
import { Avatar } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PublicIcon from '@material-ui/icons/Public';
import CommnetIcon from '@material-ui/icons/Comment'
import ShareIcon from '@material-ui/icons/Share'
import SendIcon from '@material-ui/icons/Send'
import './Post.css'
import FeedMedia from '../../FeedMedia/FeedMedia';

const Post = ({name, desc, message, imageUrl, timeStamp}) => {
    return (
        <article className="post">
            <section className="post__header">
                <div className="post__ownerImage">
                    <Avatar />
                </div>
                <div className="post__ownerDesc">
                    <h2 className="post__ownerName">{name}</h2>
                    <p className="post__desc">{desc}</p>
                    <div className="post__postedHr">
                        <p>9m <span> ● </span> </p>
                        <PublicIcon className="post__publicIcn"/>
                        
                    </div>
                    
                </div>
                <div className="post__showMore">
                    <MoreHorizIcon />
                    <div className="post__showMoreOptions">
                        {/* Show More Options component */}
                    </div>
                </div>
            </section>

            <section className="post__body">
                <p>{message}<span><a href="/">...</a></span></p>
                {imageUrl ? <img src={imageUrl} alt=""/>: ''}
            </section>

            <section className="post__reacts">
                {/* Reacts component */}
                <FavoriteIcon />
            </section>

            <section className="post__feedbacks">
                <FeedMedia Icon={ThumbUpIcon} title={`Like`} myColor={`gray`}/>
                <FeedMedia Icon={CommnetIcon} title={`Comment`} myColor={`gray`}/>
                <FeedMedia Icon={ShareIcon} title={`Share`} myColor={`gray`}/>
                <FeedMedia Icon={SendIcon} title={`Send`} myColor={`gray`}/>
            </section>
        </article>
    )
}

export default Post