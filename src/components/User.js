import { useContext } from "react";
import { FirebaseContext } from "../firebase";
import styled from "styled-components";

const User = ({ className }) => {
  const { user } = useContext(FirebaseContext);
  return (
    <>
      {user && (
        <div className={className}>
          <img
            src={user.photoURL}
            alt=""
            style={{ width: "30px", height: "30px" }}
          />
          <p>{user.displayName}</p>
        </div>
      )}
    </>
  );
};

export default styled(User)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 10px;
  color: black;

  img {
    border-radius: 50%;
    margin-right: 10px;
  }
`;
