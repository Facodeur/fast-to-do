import { useContext, useState } from "react";
import styled from "styled-components";
import useForm from "../hooks/useForm";
import { FirebaseContext } from "../firebase";

const initialState = {
  titre: ""
}

const InputAjoutList = ({ className }) => {
  const { handleChange, values, setValues } = useForm(initialState);
  const { firebase, user } = useContext(FirebaseContext);
  console.log(user.uid)

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values.titre)
    const liste = {
      user: user.uid,
      titre: values.titre
    }
    firebase.db.collection('fastodo').add(liste)

    setValues({titre: ""})
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>
        <input 
        name="titre"
        type="text" 
        placeholder="Nouvelle liste"
        value={values.titre}
        onChange={handleChange}
      />
      <button type="submit">
        <i className="fas fa-plus"></i>
      </button>
      </form>
      
    </div>
  );
};

export default styled(InputAjoutList)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;

  input {
    border-radius: 4px;
  }
  button {
    border: none;
  }
`;
