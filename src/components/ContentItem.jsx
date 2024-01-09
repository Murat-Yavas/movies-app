import { useContext } from "react";
import Button from "./UI/Button";
import "./ContentItem.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import UserProgressContext from "../store/UserProgressContext";

function ContentItem({ item }) {
  const choiceCtx = useContext(UserProgressContext);

  let cardBg;
  if (choiceCtx.bgColor === "white") {
    cardBg = "bg-white";
  } else {
    cardBg = "bg-black border-solid border-2 border-violet-600";
  }

  const handleAddButton = () => {
    choiceCtx.addToList(item);
    toast.success("Successfully added!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: choiceCtx.bgColor === "white" ? "colored" : "dark",
    });
  };

  return (
    <div
      className={`${cardBg} content-card block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700`}
    >
      <a href="#!">
        <img
          className="rounded-t-lg object-cover h-96 w-96"
          src={item.image}
          alt=""
        />
      </a>
      <div className="p-6 ">
        <h5 className="mb-2 text-xl font-medium leading-tight text-violet-600 dark:text-neutral-50">
          {item.title} - ({item.year})
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {item.description}
        </p>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          <span className="block">
            <strong>Stars</strong>
          </span>
          {item.stars}
        </p>
        <p className="mb-16 text-base text-neutral-600 dark:text-neutral-200 ">
          <span className="block">
            <strong>Director(s)</strong>
          </span>
          {item.director}
        </p>
      </div>

      <Button
        type="button"
        className="card-btn text-white inline-block rounded bg-gradient-to-br from-violet-600 to-blue-500 hover:bg-gradient-to-bl px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-violet-900 hover:text-black hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        data-te-ripple-init
        data-te-ripple-color="light"
        onClick={() => handleAddButton()}
      >
        Add to List
      </Button>
      {choiceCtx.showToast && (
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      )}
    </div>
  );
}

export default ContentItem;
