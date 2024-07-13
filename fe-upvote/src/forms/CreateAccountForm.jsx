import React from "react";
import { Link } from "react-router-dom";

const CreateAccountForm = () => {
  return (
    <form className="login-form">
      <div className="form-label">Create Account</div>
      <div>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
        />
      </div>
      <div>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
      </div>
      <div>
        <input type="email" id="email" name="email" placeholder="Email" />
      </div>
      <button type="submit">Create Account</button>
      <div className="create-account-text">
        Already have an account?{" "}
        <Link to="/" className="create-account-link">
          Click Here
        </Link>
      </div>
    </form>
  );
};

export default CreateAccountForm;
