import { useState, useEffect } from 'react';

import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search-icon.png';

// efb62436
// const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=efb62436';
const API_URL = 'http://www.omdbapi.com?apikey=efb62436';

const movie1 = {
  "Title": "Amazing Spiderman Syndrome",
  "Year": "2012",
  "imdbID": "tt2586634",
  "Type": "movie",
  "Poster": "N/A"
}

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const datas = await response.json();

    setMovies(datas.Search) 
  }
   
  useEffect(() => {
    searchMovies('Spiderman');
  }, []);
    

  return (
    <div className="App">
        <h1>MovieLand</h1>
        <div className="search">
          <input 
            type="text" 
            value={searchTerm}
            placeholder='Search for movies'
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img 
            src={SearchIcon}
            alt="search" 
            onClick={() => searchMovies(searchTerm)}
          />
          
        </div>

        {
          movies?.length > 0
            ? (
              <div className="container">
               { movies.map((movie) => (
                  < MovieCard movie={movie}/>
               ))}
              </div>
            ) : (
              <div className="empty">
                <h2>No movies found</h2>
              </div>
            )
        }
    </div>
  );
}
 
export default App; 
  