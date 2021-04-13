import { useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../../firebase'
import { login } from '../../features/userSlice'
import './Register.css'
import { AuthContext } from '../ProtectedRoute/Auth'
import { Redirect, useHistory } from 'react-router'

const Register = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")    
    const dispatch = useDispatch()

    const {authorizedUser} = useContext(AuthContext)
    let history = useHistory()

    const RegisterHandler = (e) => {
        e.preventDefault();
        if(!name){
            return alert('please enter a full name')
        }

        auth.createUserWithEmailAndPassword(email,password)
            .then(authUser=>{
                return authUser.user.updateProfile({
                    displayName: name,
                    photoURL: `https://avatars.dicebear.com/api/male/${new Date().getTime()}.svg`
                })        
            })
            .then(()=>{
                    console.log(auth.currentUser.displayName)
                    dispatch(login({
                        email: auth.currentUser.email,
                        uid: auth.currentUser.uid,
                        displayName: auth.currentUser.displayName,
                        profileUrl: auth.currentUser.photoURL
                    }))
                    window.location.href = '/'     
                })
                .catch((error)=>{
                    alert(error.message)
                })
    }

    if(authorizedUser){
        return <Redirect to="/" />
    }

    return (
        <div className="register">
            <div className="register__wrapper">
                <div className="register__logo">
                    <img src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg" alt=""/>
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
                        <h3>By clicking Agree & Join, you agree to the LinkedIn User Agreement, Privacy Policy, and Cookie Policy.</h3>
                        <input className="rform__registerBtn" type="submit" value="Agree & Join" onClick={RegisterHandler}/>
                    </form>
                </div>
                <p className="signIn__oldUser">Already on LinkedIn? <a href="/login">Sign in</a></p>
            </div>      
        </div>
    )
}

export default Register