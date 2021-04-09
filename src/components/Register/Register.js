import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../../firebase'
import { login } from '../../features/userSlice'
import './Login.css'
const Register = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")    

    const dispatch = useDispatch()

    const RegisterHandler = (e) => {
        e.preventDefault();
        
        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL
                }))
            }).catch(err=>{
                console.log(err)
            })
    }

    const Register = () => {

    }
    return (
        <div className="register">
            <div className="register__wrapper">
                <div className="register__logo">
                    <img src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg"/>
                </div>
                <div className="register__container">
                    <h1>Sign in</h1>
                    <p>Stay updated on your professional world</p>
                    <form className="rform">
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
                        <h3><a>Forgot password?</a></h3>
                        <input className="rform__registerBtn" type="submit" value="Agree &amp Join" onClick={RegisterHandler}/>
                    </form>
                </div>
                <p className="signIn__oldUser">Already on LinkedIn? <a>Sign in</a></p>
            </div>      
        </div>
    )
}

export default Register