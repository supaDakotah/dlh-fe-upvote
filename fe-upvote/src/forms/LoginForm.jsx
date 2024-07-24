import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <form className="login-form">
      <div className="form-label">Login</div>
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
      <button type="submit">Login</button>
      <div className="create-account-text">
        Don't have an account?{" "}
        <Link to="/create-account" className="create-account-link">
          Click Here
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
