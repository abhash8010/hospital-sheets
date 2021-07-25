import React, { useContext } from 'react'
import GoogleLogin from 'react-google-login'
import { UserSheet } from "./AppSheet"
import { useHistory } from 'react-router-dom'
function Login() {
    const { user, setUser } = useContext(UserSheet)
    const history = useHistory();
    function responseGoogle(response) {
        setUser(response.profileObj.name)
        console.log(response.profileObj.name)
        history.push("home")
    }
    return (
        <div className="signInContainer">
            <p>
                Sign in using your google account to access the app!
        </p>
            <div className="signInButton">
                <GoogleLogin
                    clientId="753977115465-jc2dpe35h40bovlfot0i587e2087til3.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    // uxMode="redirect"
                    // redirectUri="http://localhost:3000/home"
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            </div>
        </div>
    )
}

export default Login
