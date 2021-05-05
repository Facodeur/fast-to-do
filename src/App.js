import GlobalStyle from './theme/GlobalStyle'
import Home from './pages/Home'
import Header from './components/Header'


const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Home />
    </div>
  );
}

export default App;
