import { useContext, useEffect } from "react";
import Button from "./UI/Button";

import UserProgressContext from "../store/UserProgressContext";

export default function Header() {
  const choiceCtx = useContext(UserProgressContext);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      choiceCtx.handleBgColor(theme);
    } else {
      localStorage.setItem("theme", "white");
    }
  }, []);

  function handleChangeTheme() {
    let theme = localStorage.getItem("theme");
    choiceCtx.handleBgColor(theme);
  }

  console.log(choiceCtx.userList);

  return (
    <header className="flex justify-between text-violet-600">
      <div>
        <img />
        <h1 className="text-2xl">REACTSHOWS</h1>
      </div>
      <Button onClick={() => handleChangeTheme()}>
        Change Mode:
        {choiceCtx.bgColor === "white" ? "Dark Mode" : "Light Mode"}
      </Button>

      <Button onClick={() => choiceCtx.showList()}>
        Watch List ({choiceCtx?.userList?.length})
      </Button>
    </header>
  );
}
