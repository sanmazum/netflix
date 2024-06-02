import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../Utils/movieSlice";
import { API_OPTIONS } from "../Utils/Constant";
import { useEffect } from "react";

const usePopularMovies = () => {
  // fetch data from TMDB movie api and update the store with all the movies
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    // if (!popularMovies) getPopularMovies();
    // another way of writing the above if block- used in industries
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
