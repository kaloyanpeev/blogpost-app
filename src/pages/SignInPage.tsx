import React from "react";
import SignInForm from "./SignInPage/components/forms/SignInForm";
import {
  StyledSignInPageCard,
  StyledAlternateSignInDiv,
  StyledSignUpCard,
  StyledSignInPage,
} from "./SignInPage.styles";
import SignInButton from "./SignInPage/components/buttons/SignInButton";

const SignInPage = () => {
  return (
    <StyledSignInPage>
      <StyledSignInPageCard>
        <h1>Log In</h1>
        <SignInForm />

        <StyledAlternateSignInDiv>
          <div></div>
          <div>OR</div>
          <div></div>
        </StyledAlternateSignInDiv>

        <SignInButton />
      </StyledSignInPageCard>
      <StyledSignUpCard>
        <div>Don't have an account?</div>
        <a href="">Sign Up</a>
      </StyledSignUpCard>
    </StyledSignInPage>
  );
};

export default SignInPage;
