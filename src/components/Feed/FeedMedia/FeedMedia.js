import './FeedMedia.css'
const FeedMedia = ({Icon, title, myColor}) => {
    return (
        <div className="feed__mediaIconHandler">
            {Icon && <Icon className="feed_mediaIcon" style={{color: myColor}}/>}
            <h3>{title}</h3>
        </div>
    )
}

export default FeedMedia