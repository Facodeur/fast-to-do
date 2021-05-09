import { useContext, useEffect, useState } from 'react'
import { FirebaseContext } from "../firebase"
import styled from "styled-components";
import { colors, pxToRem } from "../theme/helpers";


const ListeTodo = ({ className }) => {
const { firebase } = useContext(FirebaseContext);
const [liste, setListe] = useState([])

  const handleSnapshot = snapshot => {
    const listes = snapshot.docs.map(doc => {
      return {
        id: doc.id,
        titre: doc.data().titre
      }
    })
    setListe(listes)
  }
  useEffect(() => {
    const unsubscribe = () => {
      firebase.db.collection('fastodo').onSnapshot(handleSnapshot)
    }
    return unsubscribe()
  }, [firebase])


  return (
    <div className={className}>
      {liste && liste.map(list => (
        <p key={list.id}>{list.titre} <i class="fas fa-list-ul"></i></p>
      ))}
    </div>
  )
}

export default styled(ListeTodo)`

p{
  display: flex;
  justify-content: space-between;
  align-items:center;
  background: ${colors.grey};
  color: ${colors.white};
  border-radius: 4px;
  margin: ${pxToRem(10)};
  padding: ${pxToRem(8)};
  font-size: ${pxToRem(16)};
  font-weight: bold;
  cursor: pointer;
}
  
`