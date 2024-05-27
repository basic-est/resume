import './App.css';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Main from './components/Main';
import ScrollToTopButton from './components/ScrollToTopButton';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <Jumbotron />

      <Main />

      <ScrollToTopButton />

      <Footer />
    </div>
  );
}

export default App;
