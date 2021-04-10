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

const Post = ({name, desc, message, imageUrl, profilePic, timeStamp}) => {  
    const currEpoch = Math.round(Date.now() / 1000)
    const seconds = Number(timeStamp ? timeStamp.seconds: new Date(currEpoch)) //old date
    const calcUpdatedTime = () => {
        const postedDate = new Date(seconds)
        const currentDate = new Date((currEpoch))
        // getting time and substrating to find relative time
        const interval = currentDate.getTime() - postedDate.getTime()

        //calculating relative time
        const mo = Math.floor(interval / 2592000)
        const d = Math.floor(interval / (3600*24))
        const h = Math.floor(interval % (3600*24) / 3600);
        const m = Math.floor(interval % 3600 / 60);
        const s = Math.floor(interval / (60/60))

        if(mo>=1){
            return <p>{`${mo} mo`} <span> ● </span> </p>
        }
        if(d>=1){
            return <p>{`${d} d`} <span> ● </span> </p>
        }
        if(h>=1){
            return <p>{`${h} h`} <span> ● </span> </p>
        }
        if(m>=1){
            return <p>{`${m} m`} <span> ● </span> </p>
        }
        if(s <= 59) {
            return <p>{`${s} s`} <span> ● </span> </p>
        }

    }
    return (
        <article className="post">
            <section className="post__header">
                <div className="post__ownerImage">
                    <Avatar src={profilePic}/>
                </div>
                <div className="post__ownerDesc">
                    <h2 className="post__ownerName">{name}</h2>
                    <p className="post__desc">{desc}</p>
                    <div className="post__postedHr">
                        {/* <p>9m <span> ● </span> </p> */}
                        {calcUpdatedTime()}
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