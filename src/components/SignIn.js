import { useContext } from 'react'
import styled from "styled-components";
import BtnLog from "./BtnLog";
import { colors } from "../theme/helpers";
import { FirebaseContext } from "../firebase"

const SignIn = ({ className }) => {
  const { firebase } = useContext(FirebaseContext)

  
  return (
    <div className={className}>
      <p>Sign in with:</p>
      <BtnLog btnColor={colors.primary} click={() => firebase.login('google')}>
        <i className="fab fa-google"></i>Google
      </BtnLog>
      <BtnLog btnColor={colors.facebook} click={() => firebase.login('facebook')}>
        <i className="fab fa-facebook-square"></i>Facebook
      </BtnLog>
      <BtnLog btnColor={colors.grey} click={() => firebase.login('github')}>
        <i className="fab fa-github"></i>Github
      </BtnLog>
    </div>
  );
};

export default styled(SignIn)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin: 0;
    text-decoration: underline;
  }
  .fab {
    margin-left: 50px;
    margin-right: 10px;
  }
`;
