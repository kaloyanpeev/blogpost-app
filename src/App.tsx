import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./utils/firebase";
import SignOutButton from "./pages/SignInPage/components/buttons/SignOutButton";
import { StyledApp } from "./App.styles";
import SignInPage from "./pages/SignInPage";

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <StyledApp>
      {user ? (
        <section>
          <h1>Logged in</h1>{" "}
          <div>
            <SignOutButton />
          </div>
        </section>
      ) : (
        <SignInPage />
      )}
    </StyledApp>
  );
};

export default App;
