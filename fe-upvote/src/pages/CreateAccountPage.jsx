import React from "react";
import LoginLayout from "../layouts/LoginLayout";
import CreateAccountForm from "../forms/CreateAccountForm";

const CreateAccountPage = () => {
  return (
    <LoginLayout>
      <CreateAccountForm />
    </LoginLayout>
  );
};

export default CreateAccountPage;
