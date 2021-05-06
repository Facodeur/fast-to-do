import GlobalStyle from './theme/GlobalStyle'
import Home from './pages/Home'
import firebase, { FirebaseContext } from './firebase'
import useAuth from './hooks/useAuth'
import PrivateIsAuth from './components/PrivateIsAuth'
import Todo from './pages/Todo'

const App = () => {
  const user = useAuth();
  console.log(user)
  return (
    <FirebaseContext.Provider value={{ user, firebase }}>
      <GlobalStyle />
      <PrivateIsAuth fallback={<Home />}>
        <Todo />
      </PrivateIsAuth>
      
    </FirebaseContext.Provider>
  );
}

export default App;
