import React from "react";
import "./App.css";
import Feed from "./components/Feed";
import SignIn from "./components/SignIn";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PlacesDetails from "./components/PlacesDetails";

function App() {
  const user = "lokey";
  return (
    //BEM
    <Router>
      <div className="app">
        {!user ? (
          <SignIn />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/place/:id">
                  <PlacesDetails />
                </Route>
                <Route exact path="/">
                  <Feed />
                </Route>
              </Switch>
            </div>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
