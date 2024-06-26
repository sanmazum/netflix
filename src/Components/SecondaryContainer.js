import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies &&
    movies.popularMovies &&
    movies.topRatedMovies &&
    movies.upcomingMovies && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-[46] pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList
            title={"Popular on Netflix"}
            movies={movies.popularMovies}
          />
          <MovieList
            title={"Upcoming Movies you might love!"}
            movies={movies.upcomingMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
