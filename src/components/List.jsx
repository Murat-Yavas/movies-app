import Button from "./UI/Button";
import { useContext, useEffect } from "react";

import UserProgressContext from "../store/UserProgressContext";

export default function List() {
  const choiceCtx = useContext(UserProgressContext);

  useEffect(() => {
    if (localStorage.getItem("items")) {
      choiceCtx.setUserList(JSON.parse(localStorage.getItem("items")));
    } else {
      choiceCtx.setUserList([]);
    }
  }, []);

  return (
    <>
      {choiceCtx.userProgress === "list" ? (
        <div>
          <div className="text-violet-600 justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/2 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Watch List</h3>
                  <Button
                    type="button"
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl float-right focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={() => choiceCtx.setUserProgress("")}
                  >
                    X
                  </Button>
                </div>

                {/*body*/}
                {choiceCtx.userList.length === 0 ? (
                  "Your list is currently empty"
                ) : (
                  <div className="relative p-6 flex-auto">
                    <div className="my-4 text-blueGray-500 text-lg leading-relaxed">
                      {choiceCtx.userList.map((item) => (
                        <div key={item.id} className="flex justify-between">
                          <div className="flex items-center gap-5 my-4">
                            <img
                              className="rounded object-cover h-12 w-12"
                              src={item.image}
                            />
                            <div
                              className={
                                item.checkedState
                                  ? "line-through text-gray-500"
                                  : ""
                              }
                            >
                              {item.title}
                            </div>
                          </div>

                          <div className="flex items-center gap-8">
                            <div>
                              <input
                                id="link-checkbox"
                                type="checkbox"
                                onChange={() =>
                                  choiceCtx.updateUserListCheck(item)
                                }
                                checked={item.checkedState ? true : false}
                                className="w-5 h-5 text-violet-600 bg-gray-100 border-gray-300 rounded focus:ring-violet-500 dark:focus:ring-violet-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-violet-600 dark:border-violet-600"
                              />
                            </div>
                            <Button
                              type="button"
                              className="text-white bg-gradient-to-br from-violet-600 to-blue-500 hover:bg-gradient-to-bl float-right focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2.5 py-1 text-center me-2 mb-2"
                              onClick={() =>
                                choiceCtx.deleteItemFromUserList(item)
                              }
                            >
                              X
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <Button
                    className="text-violet-600 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => choiceCtx.setUserProgress("")}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}
    </>
  );
}
