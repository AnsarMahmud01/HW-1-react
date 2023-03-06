import './App.css';
// import { Hero, Cards, Navbar } from './components';
// import Footer from './components/Footer';
// import ButtonWithText from './components/Demo1';
import Profile from './components/Demo1';
import ClickCoordinates from './components/Demo1'
import Example from './components/Demo1';

function App() {
  return (
    <div className="App">
      <>
        {/* <Navbar />
        <Hero />
        <Hero />
        <Cards />
        <Footer /> */}
        {/* <ButtonWithText /> */}
        <Profile name="Ansar 1" />
        <Profile name="Ansar 2" />
        <Profile name="Ansar 3" />
        {/* <ClickCoordinates /> */}
        {/* <Example /> */}
      </>
    </div>
  );
}

export default App;