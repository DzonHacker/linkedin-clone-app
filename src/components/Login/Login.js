import './Login.css'
const Login = () => {
    return (
        <div className="login">
            <div className="login__wrapper">
                <div className="login__logo">
                    <img src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg"/>
                </div>
                <div className="login__container">
                    <h1>Sign in</h1>
                    <p>Stay updated on your professional world</p>
                    <form className="form">
                        <div className="form__container">
                            <input id="id__email" className="login__email" type="email" placeholder="Email"/>
                        </div>
                        <div className="form__container">
                            <input id="id__password" className="login__password" type="password" placeholder="Password"/>
                        </div>
                        <h3><a>Forgot password?</a></h3>
                        <input className="form__loginBtn" type="submit" value="Sign in"/>
                    </form>
                </div>
                <p className="login__newUser">New to LinkedIn? <a>Join now</a></p>
            </div>      
        </div>
    )
}

export default Login