import React from "react";
import { Route } from "react-router-dom";
import "./scss/App.scss";

// import AdminMapBuilder from './admin/map-builder'
import World from "./components/world";
import LandingPage from "./components/landing/LandingPage";
import Login from "./components/landing/Login";
import FormikRegister from "./components/landing/Register";
import Header from "./components/Header";
import Pusher from "./components/pusher/Pusher";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={FormikRegister} />
      <Route path="/world" component={World} />
      <Route path="/chat" component={Pusher} />
    </div>
  );
}

export default App;
