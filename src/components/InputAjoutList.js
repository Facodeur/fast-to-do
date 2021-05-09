import { useState } from "react";
import styled from "styled-components";
import useForm from "../hooks/useForm";

const initialState = {
  titre: ""
}

const InputAjoutList = ({ className }) => {
  const { handleChange, values, setValues } = useForm(initialState)
  
  return (
    <div className={className}>
      <input 
        name="titre"
        type="text" 
        placeholder="Nouvelle liste"
        value={values.titre}
        onChange={handleChange}
      />
      <button onClick={() => console.log(values.titre)}>
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
