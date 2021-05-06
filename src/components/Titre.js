import styled from "styled-components";
import { pxToRem } from "../theme/helpers";

const Titre = ({ className }) => {
  return (
    <div className={className}>
      <h1>Fast To Do</h1>
    </div>
  );
};

export default styled(Titre)`
  margin-right: ${pxToRem(20)};
  p {
    margin: 0;
  }

  h1 {
    font-size: ${pxToRem(60)};
    font-family: "Faster One", cursive;
  }
`;
