import { useContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../../firebase'
import { login } from '../../features/userSlice'
import './Register.css'
import { AuthContext } from '../ProtectedRoute/Auth'
import { Redirect, useRouteMatch } from 'react-router'
const Register = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")    

    const dispatch = useDispatch()

    const {authorizedUser} = useContext(AuthContext)

    const RegisterHandler = (e) => {
        e.preventDefault();
        if(!name){
            return alert('please enter a full name')
        }

        auth.createUserWithEmailAndPassword(email,password)
            .then(authUser=>{
                authUser.user.updateProfile({
                    displayName: name,
                    photoURL: `http://www.avatarpro.biz/avatar/${name}?s=500`
                })
                .then(()=>{
                    dispatch(login({
                        email: authUser.user.email,
                        uid: authUser.user.uid,
                        displayName: authUser.user.displayName,
                        profileUrl: authUser.user.photoURL
                    }))
                })
                window.location.href = '/'
            })
            .catch((error)=>{
                console.log(error.message)
            })
         
    }

    if(authorizedUser){
        return <Redirect to="/" />
    }

    return (
        <div className="register">
            <div className="register__wrapper">
                <div className="register__logo">
                    <img src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg"/>
                </div>
                <div className="register__container">
                    <h1>Register</h1>
                    <p>Make the most of your professional life</p>
                    <form className="rform">
                    <div className="rform__container">
                            <input id="id__name" 
                            className="register__name" 
                            type="text" 
                            placeholder="Full Name" 
                            onChange={ e=> setName(e.target.value)}/>
                        </div>
                        <div className="rform__container">
                            <input id="id__email" 
                            className="register__email" 
                            type="email" 
                            placeholder="Email" 
                            onChange={ e=> setEmail(e.target.value)}/>
                        </div>
                        <div className="rform__container">
                            <input id="id__password" 
                            className="register__password" 
                            type="password" 
                            placeholder="Password" 
                            onChange = {e=> setPassword(e.target.value)}/>
                        </div>
                        <h3><a>By clicking Agree & Join, you agree to the LinkedIn User Agreement, Privacy Policy, and Cookie Policy.</a></h3>
                        <input className="rform__registerBtn" type="submit" value="Agree & Join" onClick={RegisterHandler}/>
                    </form>
                </div>
                <p className="signIn__oldUser">Already on LinkedIn? <a href="/login">Sign in</a></p>
            </div>      
        </div>
    )
}

export default Register