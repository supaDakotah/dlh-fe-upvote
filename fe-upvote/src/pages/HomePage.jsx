import React from "react";
import SideNav from "../core/SideNav";

const HomePage = () => {
  return (
    <div className="home-page">
      <SideNav />
      <div className="content">
        <h1>Welcome to the Home Page</h1>
        <p>
          This is the home page of your application. You can add more content
          here.
        </p>
        <p>
          This is the home page of your application. You can add more content
          here.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
