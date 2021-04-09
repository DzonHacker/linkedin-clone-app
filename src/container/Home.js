import Feed from '../components/Feed/Feed'
import Header from '../components/Header/Header'
import SideBar from '../components/SideBar/SideBar'
import './Home.css'

const Home = () => {
    
    return (
        <div className="home">
            {/*  header */}
            <Header />
            {/* Home Body */}
            <div className="home__body">
                {/* SideBar */}
                <SideBar /> 
                {/*  feed */}
                <Feed />
                {/*  Widgets  */}
                <SideBar />
            </div>
           
        </div>
    )
}

export default Home