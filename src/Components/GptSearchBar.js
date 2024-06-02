import React, { useRef } from "react";
import lang from "../Utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../Utils/openai";
import { API_OPTIONS } from "../Utils/Constant";
import { addGptMovieResult } from "../Utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // API call for searching the movie
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    const gptQuery =
      " Act as a movie recommedation system and suggest some movies for the query" +
      searchText.current.value +
      "only give me names of 5 movies, comma seperated like the example result given ahead. Example result : Chup chup ke , Sholay , Don , Golmaal , Koi Mil gaya";

    // Make an API call to GPT API and get Movie results

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    // error hanadling for gpt api
    if (!gptResults.choices) {
      alert("No results");
    } else {
      console.log(gptResults.choices?.[0]?.message?.content);
      const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

      // For each movie I will search TMDB API

      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      // promise Array variable stores the promises from the search api call [promise 1, promise 2,promise3, promise4,promise5 ]

      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);

      dispatch(
        addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
      );
    }
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className=" w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
