import { useContext } from "react";
import ContentItem from "./ContentItem";

import MovieContext from "../store/MovieContext";
import TVShowContext from "../store/TVShowContext";
import UserProgressContext from "../store/UserProgressContext";

let list = [];
export default function Contents() {
  const movieCtx = useContext(MovieContext);
  const tvShowCtx = useContext(TVShowContext);
  const choiceCtx = useContext(UserProgressContext);

  if (choiceCtx.userChoice === "movie") {
    list = movieCtx.items;
  } else {
    list = tvShowCtx.items;
  }
  return (
    <div className="grid gap-4 grid-cols-3 grid-rows-2">
      {list.map((item) => (
        <ContentItem key={item.id} item={item} />
      ))}
    </div>
  );
}
