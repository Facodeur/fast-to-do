import GlobalStyle from './theme/GlobalStyle'
import Home from './pages/Home'
import firebase, { FirebaseContext } from './firebase'
import useAuth from './hooks/useAuth'

const App = () => {
  const user = useAuth();
  console.log(user)
  return (
    <FirebaseContext.Provider value={{ user, firebase }}>
      <GlobalStyle />
      <Home />
    </FirebaseContext.Provider>
  );
}

export default App;
