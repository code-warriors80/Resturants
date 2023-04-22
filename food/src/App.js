import About from './Components/About';
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import Meals from './Components/Meals';
import Menu from './Components/Menu';
import Nav from './Components/Nav';
import Offer from './Components/Offer';
import Testimony from './Components/Testimony';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <About />
      <Menu />
      <Offer />
      <Meals />
      <Testimony />
      <Footer />
    </div>
  );
}

export default App;
