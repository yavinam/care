import Header from './components/Header';
import Landing from './components/Landing';
import Services from './components/Services';
import Leading from './components/Leading';
import MobileApp from './components/MobileApp';
import Search from './components/Search';
import Ask from './components/Ask';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Landing />
      <Services />
      <Leading />
      <MobileApp />
      <Search />
      <Ask />
      <Footer />
    </div>
  );
}

export default App;
