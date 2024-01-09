import Header from "./Header";
import ShowCartsActions from "./ShowCartsActions";
import Contents from "./Contents";
import Footer from "./Footer";
import { useContext, useEffect } from "react";
import UserProgressContext from "../store/UserProgressContext";

function Container() {
  const choiceCtx = useContext(UserProgressContext);

  useEffect(() => {
    document.body.style.backgroundColor = choiceCtx.bgColor;
  }, [choiceCtx.bgColor]);

  return (
    <div>
      <Header />
      <ShowCartsActions />
      <Contents />
      <Footer />
    </div>
  );
}

export default Container;
