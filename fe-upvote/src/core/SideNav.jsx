import React from "react";
import { useHistory } from "react-router-dom";

const SideNav = () => {
  const history = useHistory();

  const handleLogout = () => {
    history.push("/login");
  };

  const handleNewRequest = () => {
    // Logic to open the modal for adding a new request
    alert("New Request Modal Open");
  };

  return (
    <div className="side-nav">
      <div className="username">username</div>
      <h1>We Build America</h1>
      <div className="app-list">
        <ul>
          <li>PAR</li>
          <li>IDB</li>
          <li>LVF</li>
          <li>EPO</li>
        </ul>
      </div>
      <button className="new-request-button" onClick={handleNewRequest}>
        New Request
      </button>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default SideNav;
