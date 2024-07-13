import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import "./styles/App.scss";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={LoginPage} exact />
          <Route path="/create-account" component={CreateAccountPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
