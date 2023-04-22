import React from "react";
import SignInForm from "./SignInPage/components/forms/SignInForm";
import { StyledSignInPageCard } from "./SignInPage.styles";
import SignInButton from "./SignInPage/components/buttons/SignInButton";

const SignInPage = () => {
  return (
    <StyledSignInPageCard>
      <h1>Log In</h1>
      <SignInForm />

      <span>Or sign in using</span>

      <SignInButton />
    </StyledSignInPageCard>
  );
};

export default SignInPage;
