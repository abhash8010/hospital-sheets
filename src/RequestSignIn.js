import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
function RequestSignIn() {
    const history = useHistory();
    return (
        <Router>
            <div>
                Inorder to access this page, you need to be logged into the application with your google account. You can login from
<div onClick={() => history.goBack()}>here</div>
            </div>
        </Router>
    )
}

export default RequestSignIn
