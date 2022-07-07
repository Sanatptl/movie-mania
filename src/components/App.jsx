import React, { useState, useEffect } from "react";
import MovieCard from "./Card";
import "../App.css";
import SearchIcon from "../search.svg";

// APIkey 9ac45dbd

const url = "http://www.omdbapi.com/?apikey=9ac45dbd";

function App() {
  const [movieName, setMovieName] = useState("");
  const [movieArr, setMovieArr] = useState([]);

  async function searchMovie(title) {
    const response = await fetch(`${url}&s=${title}`);
    const data = await response.json();
    setMovieArr(data.Search);
    console.log(movieArr);
  }

  function getMovieName(event) {
    let { value } = event.target;
    //    console.log(value)
    setMovieName(value);
  }

  useEffect(() => {
    searchMovie("yeh jawaani hai deewani");
    document.addEventListener('keydown',keydownHandler,true);
  }, []);

  const keydownHandler = (e) => {
    // console.log(e);
    if(e.key === "Enter") {
        searchMovie(movieName)
    }
  }
  return (
    <>
      <div className="app">
        <h1>MovieMania</h1>

        <div className="search">
          <input
            type="text"
            placeholder="search movies here!"
            value={movieName}
            onChange={getMovieName}
          />
          <img
            src={SearchIcon}
            onClick={() => {
              searchMovie(movieName);
            }}
            alt="searchicon"
          />
        </div>
      </div>
      {/* <div className="container">
           {movieArr.map((ele) => {
              <MovieCard type={ele.Type} title={ele.Title}   year={ele.Year} poster={ele.Poster} />
        })}

        </div> */}
      {movieArr?.length > 0 ? (
        <div className="container">
          {movieArr.map((ele) => (
            <MovieCard id={ele.imdbID} type={ele.Type} title={ele.Title} year={ele.Year} poster={ele.Poster} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </>
  );
}

export default App;
