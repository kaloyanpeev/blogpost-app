import React from "react";
import useCurrentUserSelector from "./store/selectors/useCurrentUserSelector";

const App = () => {
  const { currentUser } = useCurrentUserSelector();

  return <div>App</div>;
};

export default App;
