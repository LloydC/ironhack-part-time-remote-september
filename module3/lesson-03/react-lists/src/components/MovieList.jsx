import { useState, useEffect } from 'react';
import moviesData from '../movies-data.json'; // import the array of movie objects
import MovieCard from './MovieCard';
function MovieList() {
  const [movies, setMovies] = useState(moviesData);  // Declare a state variable "movies" and set the array from movies-data.json as the initial state
  const [showMovies, setShowMovies] = useState(true); // controls the display of the list of movies

  useEffect(()=>{
    console.log('hi :)')
  }, [])
  const toggleShowMovies = () => {
    setShowMovies(!showMovies);
  };
  return (
    <div>
      <h2>Movie List</h2>
      <button onClick={toggleShowMovies}>{showMovies ? 'Hide' : 'Show'}</button>
      {showMovies && movies.map(movie => <MovieCard key={movie._id} movie={movie} movies={movies} setMovies={setMovies}/>)}
    </div>
  );
}
 
export default MovieList;