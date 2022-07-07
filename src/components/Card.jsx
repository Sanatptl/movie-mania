import React from "react";

function MovieCard(props) {
  return (
    <div className="movie" key={props.id}>
      <div>
        <p>{props.year}</p>
      </div>
      <div>
        <img
          src={
            props.poster !== "N/A"
              ? props.poster
              : "https://via.placeholder.com/400"
          }
        ></img>
      </div>
      <div>
        <span>{props.type}</span>
        <h3>{props.title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;

// {
//     "Title": "Batman v Superman: Dawn of Justice",
//     "Year": "2016",
//     "imdbID": "tt2975590",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
// }
