import { createContext, useState } from "react";

const MovieContext = createContext({
  items: [],
});

export function MovieContextProvider({ children }) {
  const [movieList, setMovieList] = useState([
    {
      id: "m1",
      image:
        "https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      title: "Good Will Hunting",
      description:
        "Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.",
      director: "Gus Van Sant",
      stars: "Robin Williams - Matt Damon - Ben Affleck",
      year: "1997",
    },
    {
      id: "m2",
      image:
        "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      title: "Joker",
      description:
        "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
      director: "Todd Phillips",
      stars: "Joaquin Phoenix - Robert De Niro - Zazie Beetzk",
      year: "2019",
    },
    {
      id: "m3",
      image:
        "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_FMjpg_UX1000_.jpg",
      title: "Saving Private Ryan",
      description:
        "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action",
      director: "Steven Spielberg",
      stars: "Tom Hanks - Matt Damon - Tom Sizemore",
      year: "1998",
    },
    {
      id: "m4",
      image:
        "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/57618417a0ddf3b7aa29db658bef2fc3b9608bb11a021631d3b6408441c1e0f7._RI_TTW_.jpg",
      title: "The Dark Knight",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      director: "Christopher Nolan",
      stars: "Christian Bale - Heath Ledger - Aaron Eckhart",
      year: "2008",
    },
    {
      id: "m5",
      image:
        "https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_.jpg",
      title: "Green Book",
      description:
        "A working-class Italian-American bouncer becomes the driver for an African-American classical pianist on a tour of venues through the 1960s American South.",
      director: "Peter Farrelly",
      stars: "Viggo Mortensen - Mahershala Ali - Linda Cardellini",
      year: "2018",
    },
    {
      id: "m6",
      image:
        "https://m.media-amazon.com/images/M/MV5BODY0MDM1MDE2OV5BMl5BanBnXkFtZTcwMzEyMjkyNw@@._V1_.jpg",
      title: "Intouchables",
      description:
        "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
      director: "Olivier Nakache - Éric Toledano",
      stars: "François Cluzet - Omar Sy - Anne Le Ny",
      year: "2011",
    },
  ]);

  const movieCtx = {
    items: movieList,
  };

  return (
    <MovieContext.Provider value={movieCtx}>{children}</MovieContext.Provider>
  );
}

export default MovieContext;
