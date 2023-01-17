import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePageWithNavigate from './pages/HomePageWithNavigate';
// import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ErrorPage from './pages/ErrorPage';
import './App.css';
import projects from './projects-data.json';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
        <Route path='/' element={<HomePageWithNavigate projects={projects}/>} />
        <Route path='/about' element={<AboutPage />} />
        <Route path={'/projects'} element={<ProjectsPage projects={projects} />} />
        <Route path={'*'} element={<ErrorPage />}/>
     </Routes>
    </div>
  );
}

export default App;
