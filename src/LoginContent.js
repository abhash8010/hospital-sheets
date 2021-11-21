import React, { useContext } from 'react'
import DisplayInfo from './DisplayInfo'
import MainApp from './MainApp'
import GoogleLogout from 'react-google-login';
import { UserSheet } from './AppSheet';
import RequestSignIn from './RequestSignIn'
import { useHistory } from 'react-router-dom';
function LoginContent() {
  const { user, setUser } = useContext(UserSheet)
  const history = useHistory();
  console.log(user, "This is from the inside")

  const handleLogout = (response) => {
    console.log(response)
    setUser(null)
    // history.goBack()
  }
  return (
    <>
      <div className="logout-container">
        <GoogleLogout
          buttonText="Signout"
          onSuccess={handleLogout}
          onFailure={handleLogout}
          clientId="753977115465-jc2dpe35h40bovlfot0i587e2087til3.apps.googleusercontent.com"
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
    </>
    // {/* <SignedInContent handleLogout={handleLogout} /> */ }

    // :
    // <RequestSignIn />

  )
}

export default LoginContent
