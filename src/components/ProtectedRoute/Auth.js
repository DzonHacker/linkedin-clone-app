import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase'
export const AuthContext = React.createContext()

const AuthProvider = (props) => {
    const [authorizedUser, setAuthorizedUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        // auth.onAuthStateChanged((authUser)=> {          
        //     if(authUser){
        //         setAuthorizedUser(authUser)
        //     }
        //     setLoading(false)
        // })
        new Promise(resolve=>{
            auth.onAuthStateChanged(resolve)
        }).then(authUser =>{
            setAuthorizedUser(authUser)
            setLoading(false)
        })
    },[])
    if(loading) {
        return <p>Loading ...</p>
    }

    return (
        <AuthContext.Provider value={{authorizedUser}}>
            {props.children}
        </AuthContext.Provider>
        
    )
}

export default AuthProvider