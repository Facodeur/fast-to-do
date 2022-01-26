import { useContext } from 'react'
import styled from "styled-components";
import ButtonLog from "./ButtonLog";
import { colors } from "../theme/helpers";
import { FirebaseContext } from "../firebase"
import { isEmbedded } from "react-device-detect"

const SignIn = ({ className }) => {
  const { firebase } = useContext(FirebaseContext)

  
  return (
    <div className={className}>
      <p>Sign in with:</p>
      <ButtonLog btnColor={colors.primary} click={() => {

        
        if(window.innerWidth < 700) {
         return firebase.loginRedirect('google');
        } else {
         return firebase.login('google')
        }
        
      } }>
        <i className="fab fa-google"></i>Google
      </ButtonLog>
      <ButtonLog btnColor={colors.facebook} click={() => firebase.login('facebook')}>
        <i className="fab fa-facebook-square"></i>Facebook
      </ButtonLog>
      <ButtonLog btnColor={colors.grey} click={() => firebase.login('github')}>
        <i className="fab fa-github"></i>Github
      </ButtonLog>
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
