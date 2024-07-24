const LoginLayout = ({ children }) => {
  return (
    <div className="login-page-container">
      <div className="picture-container">
        <div className="welcome">
          <div>Welcome to Upvote</div>
        </div>
      </div>
      <div className="login-info-container">{children}</div>
    </div>
  );
};

export default LoginLayout;
