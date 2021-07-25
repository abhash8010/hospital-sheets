import React from 'react'
import DisplayInfo from './DisplayInfo'
import MainApp from './MainApp'
import GoogleLogout from 'react-google-login';
function SignedInContent(handleLogout) {
    return (
        <div>
            <div className="logout-container">
                <GoogleLogout
                    buttonText="Signout"
                    onSuccess={handleLogout}
                    onFailure={handleLogout}
                    clientId="753977115465-jc2dpe35h40bovlfot0i587e2087til3.apps.googleusercontent.com"
                    // uxMode="redirect"
                    // redirectUri="http://localhost:3000"
                    className="logout"
                />
            </div>
            <MainApp>
                <div className="mainPage-container">
                    <div className="mainPage-display">
                        <div className="display-info">
                            <DisplayInfo />
                        </div>
                    </div>
                </div>
            </MainApp>
        </div>
    )
}

export default SignedInContent
