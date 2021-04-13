import { useContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../../firebase'
import { login } from '../../features/userSlice'
import './Login.css'
import { Redirect } from 'react-router'
import { AuthContext } from '../ProtectedRoute/Auth'
const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    
    

    const LoginHandler = (e) => {
        e.preventDefault();
        
        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL
                }))
                window.location.href = "/"
            }).catch(err=>{
                alert('Please Check Email / Password')
            })
    }

    const { authorizedUser } = useContext(AuthContext)

    if(authorizedUser) {
        return <Redirect to="/" />
    }

    return (
        <div className="login">
            <div className="login__wrapper">
                <div className="login__logo">
                    <img src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg" alt=""/>
                </div>
                <div className="login__container">
                    <h1>Sign in</h1>
                    <p>Stay updated on your professional world</p>
                    <form className="form">
                        <div className="form__container">
                            <input id="id__email" 
                            className="login__email" 
                            type="email" 
                            placeholder="Email" 
                            onChange={ e=> setEmail(e.target.value)}/>
                        </div>
                        <div className="form__container">
                            <input id="id__password" 
                            className="login__password" 
                            type="password" 
                            placeholder="Password" 
                            onChange = {e=> setPassword(e.target.value)}/>
                        </div>
                        <h3><a href="/">Forgot password?</a></h3>
                        <input className="form__loginBtn" type="submit" value="Sign in" onClick={LoginHandler}/>
                    </form>
                </div>
                <p className="login__newUser">New to LinkedIn? <a href="/register">Join now</a></p>
            </div>      
        </div>
    )
}

export default Login