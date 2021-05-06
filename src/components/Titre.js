import styled from "styled-components";
import { pxToRem, media } from "../theme/helpers";

const Titre = ({ className }) => {
  return (
    <div className={className}>
      <h1>Fast To Do</h1>
    </div>
  );
};

export default styled(Titre)`
  margin: ${pxToRem(20)};
  p {
    margin: 0;
  }

  h1 {
    font-size: ${pxToRem(42)};
    font-family: "Faster One", cursive;
  }
  ${
    media.small`
    h1 {
      font-size: ${pxToRem(60)};
    }
      
    `
  }
`;
