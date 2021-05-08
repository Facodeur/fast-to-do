import { useContext } from "react";
import { FirebaseContext } from "../firebase";
import styled from "styled-components";
import BtnLogin from "./BtnLogin";
import { colors, pxToRem } from "../theme/helpers";
import User from "./User";

const Slider = ({ className }) => {
  const { firebase, user } = useContext(FirebaseContext);
  console.log(user);
  return (
    <div className={className}>
      <User />

      <BtnLogin className="text-center" btnColor={colors.grey} click={() => firebase.logout()}>
        Logout
      </BtnLogin>
    </div>
  );
};

export default styled(Slider)`
  display: flex;
  flex-direction: column;
  background: ${colors.lightGrey};
  color: ${colors.black};
  height: 100vh;
  width: ${pxToRem(280)};
`;
