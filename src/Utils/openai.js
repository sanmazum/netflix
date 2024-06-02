import OpenAI from "openai";
import { OPEN_AI_KEY } from "./Constant";

const openai = new OpenAI({
  //   apiKey: process.env["OPENAI_API_KEY"],
  apiKey: OPEN_AI_KEY,
  dangerouslyAllowBrowser: true, // to get rid of the security warning from API as ideally should be done in the backend
});

export default openai;
