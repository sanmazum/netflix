import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { background_image_url } from "../Utils/Constant";

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img alt="background-Image" src={background_image_url} />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearchPage;
