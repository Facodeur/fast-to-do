import styled from "styled-components";
import Slider from "../components/Slider";

const Todo = ({ className }) => {
  return (
    <div className={className}>
      <Slider />
      Todo
    </div>
  );
};

export default styled(Todo)`
  display: flex;
`;
