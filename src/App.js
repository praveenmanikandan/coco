import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/Menu/components/Menu";
import HomeScreen from "./components/HomeScreen/components/HomeScreen";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={NavBar} />
          <Route path="/home" component={HomeScreen} />
        </div>
      </Router>
    );
  }
}

export default App;
