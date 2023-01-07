import Spinner from './components/Spinner'; // <-- add
import { useState, useEffect } from 'react'; // <-- add
// import ProjectList from './components/ProjectList';
import MovieList from './components/MovieList';
import './App.css';
 
function App() {
  // Declare a new state variable, which we'll call "isLoading"
  const [isLoading, setIsLoading] = useState(true); // <-- add
  
 

  useEffect(()=>{
    setTimeout(()=> setIsLoading(false), 3000)
  }, [])

  if (isLoading) {
    return <Spinner />;
  } 
  else {
    return (
      <div className="App">
        <MovieList />
      </div>
    );
  } 
}
export default App;
