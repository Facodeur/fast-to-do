import { useContext } from "react";
import { FirebaseContext } from "../firebase";

const PrivateIsAuth = ({ fallback, children }) => {
  const user = useContext(FirebaseContext);

  return user ? children : fallback;
};

export default PrivateIsAuth;