import logo from './logo.svg';
import './App.css';

import NewMovie from './components/NewMovies';
import NewGenre from './components/NewGenres';
import MoviesList from './components/MoviesList';
import GenresList from './components/GenresList';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="add_movie_and_genre">
      <NewMovie movies={movies} genres={genres} setMovies={setMovies}/>
      <NewGenre genres={genres} setGenres={setGenres}/>
      </div>
      <MoviesList movies={movies} setMovies={setMovies} genres={genres}/>
      <GenresList genres={genres} setGenres={setGenres} setMovies={setMovies}/>
    </div>
  );
}

export default App;
