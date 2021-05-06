import { useContext } from 'react'
import { FirebaseContext } from '../firebase'
import BtnLog from '../components/BtnLog'
import { colors } from "../theme/helpers";



const Todo = () => {
const { firebase } = useContext(FirebaseContext);

  return (
    <div>
      Todo
    </div>
  )
}

export default Todo
