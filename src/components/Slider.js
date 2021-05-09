import { useContext } from "react";
import { FirebaseContext } from "../firebase";
import styled from "styled-components";
import ButtonLog from "./ButtonLog";
import { colors, pxToRem } from "../theme/helpers";
import User from "./User";
import InputAjoutList from "./InputAjoutList";
import ListeTodo from "./ListeTodo";

const Slider = ({ className }) => {
  const { firebase, user } = useContext(FirebaseContext);
  console.log(user);
  return (
    <div className={className}>
      <User />
      <ButtonLog className="text-center" btnColor={colors.grey} click={() => firebase.logout()}>
        Logout
      </ButtonLog>
      <InputAjoutList />
      <ListeTodo />
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
