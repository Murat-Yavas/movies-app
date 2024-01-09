import { createContext, useEffect, useState } from "react";

const UserProgressContext = createContext({
  userChoice: "",
  handleMovie: () => {},
  handleTvShows: () => {},
  showList: () => {},
  hideList: () => {},
  userProgress: "",
  setUserProgress: () => {},
  userList: [],
  setUserList: () => {},
  addToList: (item) => {},
  updateUserListCheck: (item) => {},
  deleteItemFromUserList: (item) => {},
  bgColor: "",
  handleBgColor: (theme) => {},
  showToast: "",
});

export function UserProgressContextProvider({ children }) {
  const [userChoice, setUserChoice] = useState("movie");
  const [userProgress, setUserProgress] = useState("");
  const [userList, setUserList] = useState([]);
  const [bgColor, setBgColor] = useState("");
  const [showToast, setShowToast] = useState(true);

  function showList() {
    setUserProgress("list");
  }

  function hideList() {
    setUserProgress("");
  }

  function handleMovie() {
    setUserChoice("movie");
  }

  function handleTvShows() {
    setUserChoice("tvShow");
  }

  function addToList(item) {
    let ifExists = false;

    if (userList.length === 0) {
      setUserList([...userList, item], (item.checkedState = false));
      localStorage.setItem("items", JSON.stringify([...userList, item]));
    } else {
      userList.map((listItem) => {
        if (listItem.id === item.id) {
          ifExists = true;
          setShowToast(false);
          return;
        }
      });
      if (!ifExists) {
        setUserList([...userList, item], (item.checkedState = false));
        localStorage.setItem("items", JSON.stringify([...userList, item]));
        setShowToast(true);
      }
    }
  }

  console.log(userList);

  function updateUserListCheck(item) {
    const newUserList = userList.map((listItem) => {
      if (listItem.id === item.id) {
        return { ...listItem, checkedState: !listItem.checkedState };
      } else return { ...listItem };
    });

    setUserList(newUserList);
  }

  function deleteItemFromUserList(item) {
    const newList = userList.filter((listItem) => listItem.id !== item.id);
    setUserList(newList);

    localStorage.setItem("items", JSON.stringify(newList));
  }

  function handleBgColor(theme) {
    if (theme === "white") {
      setBgColor("black");
      localStorage.setItem("theme", "black");
    } else {
      setBgColor("white");
      localStorage.setItem("theme", "white");
    }
  }

  const choiceCtx = {
    userChoice,
    handleMovie,
    handleTvShows,
    showList,
    hideList,
    userProgress,
    setUserProgress,
    userList,
    setUserList,
    addToList,
    updateUserListCheck,
    deleteItemFromUserList,
    bgColor,
    handleBgColor,
    showToast,
  };

  return (
    <UserProgressContext.Provider value={choiceCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;
