import React from "react";
import SignInButton from "./pages/SignInPage/components/buttons/SignInButton";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./utils/firebase";
import SignOutButton from "./pages/SignInPage/components/buttons/SignOutButton";
import useCurrentUserSelector from "./store/selectors/useCurrentUserSelector";

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      {user ? (
        <section>
          <h1>Logged in</h1>{" "}
          <div>
            <SignOutButton />
          </div>
        </section>
      ) : (
        <SignInButton />
      )}
    </div>
  );
};

export default App;
