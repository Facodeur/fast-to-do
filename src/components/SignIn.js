import styled from "styled-components";
import BtnLoging from "./BtnLoging";
import { colors } from "../theme/helpers";

const SignIn = ({ className }) => {
  const handleClick = () => {
    console.log("j'ai click !");
  };
  return (
    <div className={className}>
      <p>Sign in with:</p>
      <BtnLoging btnColor={colors.primary} click={handleClick}>
        <i class="fab fa-google"></i>Google
      </BtnLoging>
      <BtnLoging btnColor={colors.facebook}>
        <i className="fab fa-facebook-square"></i>Facebook
      </BtnLoging>
      <BtnLoging btnColor={colors.grey}>
        <i class="fab fa-github"></i>Github
      </BtnLoging>
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
