import React from "react";
import SideNav from "../core/SideNav";

const NewPage = () => {
  return (
    <div className="new-page">
      <SideNav />
      <div className="content">
        <h1>New Page</h1>
        <p>
          This is a new page in your application. You can add more content here.
        </p>
      </div>
    </div>
  );
};

export default NewPage;
