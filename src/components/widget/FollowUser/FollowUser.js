import { Avatar } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import './FollowUser.css'


const FollowUser = (props) => {
    return (
        <div className="followUser">
            <div className="followUser__wrapper">
                <Avatar src={props.imagePath} />
                <div className="followUser__info">
                    <h3 className="followUser__name">{props.uname}</h3>
                    <p className="followUser__desc">{props.desc}</p>

                </div>
            </div>
            <div className="FollowUser__followBtnWrapper">
                    <AddIcon className="followUser__addBtn"/>
                    <button className="followUser__followBtn">Follow</button>
            </div>
        </div>
    )
}

export default FollowUser