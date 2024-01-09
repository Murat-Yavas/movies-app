import "./App.css";
import List from "./components/List";
import Container from "./components/Container";
import { MovieContextProvider } from "./store/MovieContext";
import { TVShowContextProvider } from "./store/TVShowContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";

function App() {
  return (
    <>
      <UserProgressContextProvider>
        <MovieContextProvider>
          <TVShowContextProvider>
            <Container />
            <List />
          </TVShowContextProvider>
        </MovieContextProvider>
      </UserProgressContextProvider>
    </>
  );
}

export default App;
