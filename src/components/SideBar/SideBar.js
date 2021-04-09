import { Avatar } from '@material-ui/core'
import './SideBar.css'


const SideBar = () => {

    const RecentHashTag = (tag) => {
        return(
            <div className="sidebar__recents">
                <span className="sidebar__hash">#</span>
                <p>{tag}</p>
            </div>
        )
    }

    return (
        <div id="sidebar" className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1554034483-04fda0d3507b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="" />
                <Avatar className="sidebar__avatar" />
                <h2>John Sherchan</h2>
                <h4>john.sherchan10@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <article className="sidebar__stat">
                    <p>Who Viewed You</p>
                    <p className="sidebar__statNumber">3,333</p>
                </article>
                <article className="sidebar__stat">
                    <p>Views On Post</p>
                    <p className="sidebar__statNumber">3,000</p>
                </article>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {RecentHashTag('ReverseEngineering')}
                {RecentHashTag('MalwareAnalysis')}
                {RecentHashTag('Programming')}
                {RecentHashTag('Hacking')}
            </div>
            
        </div>
      
    )
}

export default SideBar