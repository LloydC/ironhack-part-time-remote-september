// import logo from './logo.svg';
import NavigationBar from './components/NavigationBar/NavigationBar'; // const NavigationBar = require('./components/NavigationBar.jsx')
import MainSection from './components/MainSection/MainSection';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
