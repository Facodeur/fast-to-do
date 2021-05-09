import { useState } from "react";
import styled from "styled-components";

const InputAjoutList = ({ className }) => {
  const [value, setValue] = useState('')
  return (
    <div className={className}>
      <input 
        name="liste" 
        type="text" 
        placeholder="Nouvelle liste"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button onClick={() => console.log(value)}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};

export default styled(InputAjoutList)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;

  input {
    border-radius: 4px;
  }
  button {
    border: none;
  }
`;
