import React from "react";
import { useAppDispatch } from "../../../../store";
import { signInWithGoogle } from "../../../../store/middleware/currentUser";
import GoogleButton from "react-google-button";

const SignInButton = () => {
  const dispatch = useAppDispatch();
  return (
    <GoogleButton type="dark" onClick={() => dispatch(signInWithGoogle())}>
      Sign in with Google
    </GoogleButton>
  );
};

export default SignInButton;
