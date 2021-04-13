import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HeaderOption from './HeaderOptions/HeaderOption'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import WorkIcon from '@material-ui/icons/Work'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { Avatar } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { logout } from '../../features/userSlice'
import { auth } from '../../firebase'
import { AuthContext } from '../ProtectedRoute/Auth'
import { useContext } from 'react'
import { useHistory } from 'react-router'




const Header = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const HandleSignOut = () => {
        auth.signOut().then(()=>{
            dispatch(logout())
            window.location.href="/login"
        })
        
    }
    const {authorizedUser} = useContext(AuthContext)


    return (
        <header className="header">
            <div className="header__wrapper">
                <div className="header__left">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" alt=""/>
                   <div className={`header__search ${props.grow ? `grow`: ``}`}  onClick={()=>{props.onInutClicked()}}>
                       <SearchIcon />
                       <input className={props.grow ? `expand`:``}  type="text" />
                   </div>
                </div>
                <div className="header__right">
                   <HeaderOption Icon={HomeIcon} title="Home"/>
                   <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                   <HeaderOption Icon={WorkIcon} title="Jobs"/>
                   <HeaderOption Icon={ChatIcon} title="Messaging" />
                   <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                   <div className="dropdown">
                       <HeaderOption Icon={Avatar} title="Me" source={`${authorizedUser.photoURL?authorizedUser.photoURL: ``}`}/>
                       <div className="dropdown__container">
                           <section className="dropdown__top">
                               <div className="dropdown__profile">
                                   <Avatar className="dropdown__profileImg" src={`${authorizedUser.photoURL?authorizedUser.photoURL: ``}`}/>
                                   <div className="dropdown__profileInfo">
                                       <h2>{authorizedUser ? authorizedUser.displayName: ``}</h2>
                                       <p>{authorizedUser.email}</p>
                                   </div>
                               </div>
                               <button>View Profile</button>

                           </section>
                           <div className="dropdown__splitter"></div>
                           <section className="dropdown__center">
                               <div className="dropdown__account">
                                   <h3>Account</h3>
                                   <p><a>Settings and Privacy</a></p>
                                   <p><a>Help</a></p>
                                   <p><a>Language</a></p>
                               </div>

                           </section>
                           <div className="dropdown__splitter"></div>
                           <section className="dropdown__bottom">
                               <div className="dropdown__manage">
                                 <h3>Manage</h3>
                                 <p><a>Posts and Activity</a></p>
                                 <p><a>Job Posting Account</a></p>
                               </div>

                           </section>
                           <div className="dropdown__splitter"></div>
                           <section className="dropdown__signout">
                               <p><a onClick={HandleSignOut}>Sign Out</a></p>
                           </section>
                       </div>
                    </div>
                </div>  
                <div className="header__end">
                    <p>| Designed By <span><a className="johnsherchan" href="https://johnsherchan.com.np" target="__blank">John Sherchan</a></span></p>
                </div>
            </div>
            

        </header>
    )
}

export default Header