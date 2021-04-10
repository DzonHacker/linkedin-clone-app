import { useState } from 'react'
import Feed from '../components/Feed/Feed'
import Header from '../components/Header/Header'
import SideBar from '../components/SideBar/SideBar'
import Backdrop from '../components/UI/Backdrop/Backdrop'
import './Home.css'

const Home = () => {
    const [inputClicked, setInputClicked] = useState(false)
    const SearchInputHandler = () => {
        setInputClicked(true)
    }
    const BackdropHandler = () => {
        setInputClicked(false)
    }
    // return (
    //     <div className="home">
    //         {/*  header */}
    //         <Header onInutClicked={SearchInputHandler} grow={inputClicked} />
    //         {/* Home Body */}
    //         <Backdrop show={inputClicked} backdropClicked={BackdropHandler}/>
    //         <div className="home__body">
                
    //             {/* SideBar */}
    //             <SideBar /> 
    //             {/*  feed */}
    //             <Feed />
    //             {/*  Widgets  */}
    //             <SideBar />
    //         </div>
           
    //     </div>
    // )
    return (
        <div className="home">
            <Header onInutClicked={SearchInputHandler} grow={inputClicked} />
            <Backdrop show={inputClicked} backdropClicked={BackdropHandler}/>
            <div className="home__bodyWrapper">
                <div className="home__body">

                    {/* SideBar */}
                    <SideBar /> 
                    {/*  feed */}
                    <Feed />
                    {/*  Widgets  */}
                    <SideBar />
                </div>
            </div>
        </div>
    )
}

export default Home