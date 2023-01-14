import { Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';
import './App.css';


function App() {
  return (
    <div className="App">
      <NavigationBar />

      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      
    </div>
  );
}

export default App;
