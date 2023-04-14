import React from "react";
import { useAppDispatch } from "../../../../store";
import { signOutUser } from "../../../../store/middleware/currentUser";

const SignOutButton = () => {
  const dispatch = useAppDispatch();

  return <button onClick={() => dispatch(signOutUser())}>Sign Out</button>;
};

export default SignOutButton;
