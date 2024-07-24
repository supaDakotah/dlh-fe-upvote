import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Modal from "./Modal"; // Import the modal component

const SideNav = () => {
  const history = useHistory();
  const [selectedApp, setSelectedApp] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    history.push("/login");
  };

  const handleNewRequest = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveModal = (newObject) => {
    console.log("New object to save:", newObject);
    // Logic to save the new object can go here
    setShowModal(false);
  };

  const handleAppClick = (app) => {
    setSelectedApp(app);
    // Logic to handle app selection can go here
  };

  return (
    <div className="side-nav">
      <div className="username">username</div>
      <div className="header-text">
        <div className="header-main-text">
          <div>WE BUILD</div>
          <div>AMERICA</div>
        </div>
        <div>#WHYBHI</div>
      </div>
      <div className="app-list">
        <label>Apps</label>
        <ul>
          {["PAR", "IDB", "LVF", "EPO"].map((app) => (
            <li
              key={app}
              className={selectedApp === app ? "selected" : ""}
              onClick={() => handleAppClick(app)}
            >
              {app}
            </li>
          ))}
        </ul>
      </div>
      <button className="new-request-button" onClick={handleNewRequest}>
        New Request
      </button>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
      <Modal
        show={showModal}
        handleClose={handleCloseModal}
        handleSave={handleSaveModal}
      />
    </div>
  );
};

export default SideNav;
