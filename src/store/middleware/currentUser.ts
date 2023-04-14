import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signOut,
} from "@firebase/auth";
import { auth } from "../../utils/firebase";
import { logInUser, logOutUser } from "../slices/currentUserSlice";
import { AppDispatch } from "../store";

const signInWithGoogle = () => {
  return async (dispatch: AppDispatch) => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      dispatch(logInUser(result.user));
    } catch (err) {
      console.log(err);
    }
  };
};

const signOutUser = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const auth = getAuth();
      const result = await signOut(auth);
      dispatch(logOutUser());
    } catch (err) {
      console.log(err);
    }
  };
};

export { signInWithGoogle, signOutUser };
