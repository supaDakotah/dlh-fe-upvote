import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import HomePage from "./pages/HomePage";
import NewPage from "./pages/NewPage";
import "./styles/App.scss";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={LoginPage} exact />
          <Route path="/login" component={LoginPage} />
          <Route path="/create-account" component={CreateAccountPage} />

          <Route path="/home" component={HomePage} />
          <Route path="/new" component={NewPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
