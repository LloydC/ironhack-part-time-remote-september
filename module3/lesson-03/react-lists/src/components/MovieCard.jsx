function MovieCard(props) {
    const { movie, movies, setMovies } = props;

    const deleteMovie = (movieId) => {
        // find a specific movie in the state variable 'movies'
        // console.log(movieToRemove)
        // remove it from a copy of the array 'movies'
        // updateing the state variable 'movies' with our copied array
        const copyOfMovies = [...movies];
        const updatedMovies = copyOfMovies.filter(movie => movie._id !== movieId);    
        setMovies(updatedMovies)
      }
      function generateScoreLabel(score) { // determining what to render depending on the IMDB Rating Score
        if (score > 9) {
          return <span className="green">9+</span>;
        } else if (score < 7) {
          return <span className="red">{score}</span>;
        } else {
          return <span className="black">{score}</span>;
        }
      }
   
    return (
      <div className="MovieCard">
        <h3>{movie.title}</h3>
        <p>Director: {movie.director}</p>
        <p>Rating: {generateScoreLabel(movie.IMDBRating)}</p>
        {/* {movie.hasOscars && <p>Got the Oscar Award! </p>}
        {!movie.hasOscars && <p>Great movie but no Oscars! </p>} */}
        {movie.hasOscars ? <p>Got the Oscar Award! </p> : <p>Great movie but no Oscars!</p>}
        <button onClick={() => deleteMovie(movie._id)} className="btn-delete">
          Delete 
        </button>
      </div>
    );
  }
   
  export default MovieCard;