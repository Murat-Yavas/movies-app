import { useContext } from "react";
import Button from "./UI/Button";

import UserProgressContext from "../store/UserProgressContext";

export default function ShowCartsActions() {
  const choiceCtx = useContext(UserProgressContext);

  let selectedButtonClasses =
    "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl px-3 py-1.5 rounded";

  return (
    <div className="flex my-16 text-violet-600">
      <Button
        className={`mr-16 ${
          choiceCtx.userChoice === "movie" ? selectedButtonClasses : ""
        }`}
        onClick={() => choiceCtx.handleMovie("movie")}
      >
        Movies
      </Button>
      <Button
        className={`${
          choiceCtx.userChoice === "tvShow" ? selectedButtonClasses : ""
        }`}
        onClick={() => choiceCtx.handleTvShows("tvShow")}
      >
        TV Shows
      </Button>
    </div>
  );
}
