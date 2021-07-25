import React from 'react';
import "./App.css";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginContent from "./LoginContent";
import { UserSheet } from "./AppSheet"
function App() {
  const [user, setUser] = React.useState(null);
  return (
    <>
      <Router>
        <UserSheet.Provider value={{ user, setUser }}>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/home">
              <LoginContent />
            </Route>
          </Switch>
        </UserSheet.Provider>
      </Router>
    </>
  )
}
export default App;