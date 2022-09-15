import { createContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { app } from "../lib/Firebase";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, loading, error] = useAuthState(auth, options);

  return (
    <UserContext.Provider
      value={{
        user,
        error,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
