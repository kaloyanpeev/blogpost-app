import { useAppSelector } from "../store";

const useCurrentUserSelector = () => {
  const currentUser = useAppSelector((state) => state.currentUser);
  return {
    currentUser,
  };
};

export default useCurrentUserSelector;
