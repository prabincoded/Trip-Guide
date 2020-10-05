import React from "react";
import "./App.css";
import Feed from "./components/Feed";
import SignIn from "./components/SignIn";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  const user = null;
  return (
    //BEM
    <div className="app">
      {!user ? (
        <SignIn />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
