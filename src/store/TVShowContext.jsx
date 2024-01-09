import { createContext, useState } from "react";

const TVShowContext = createContext({
  items: [],
});

export function TVShowContextProvider({ children }) {
  const [tvShowList, setTvShowList] = useState([
    {
      id: "s1",
      image:
        "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
      title: "Breaking Bad",
      description:
        "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
      director: "George Vincent Gilligan Jr.",
      stars: "Bryan Cranston - Aaron Paul - Anna Gunn",
      year: "2008 - 2013",
      noOfSeries: "5",
    },
    {
      id: "s2",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTI3ODc2ODc0M15BMl5BanBnXkFtZTYwMjgzNjc3._V1_FMjpg_UX1000_.jpg",
      title: "Band of Brothers",
      description:
        "The story of Easy Company of the U.S. Army 101st Airborne Division and their mission in World War II Europe, from Operation Overlord to V-J Day.",
      director: " Tom Hanks - Steven Spielberg,",
      stars: "Scott Grimes - Damian Lewis - Ron Livingston",
      year: "2001",
      noOfSeries: "1",
    },
    {
      id: "s3",
      image:
        "https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_FMjpg_UX1000_.jpg",
      title: "Rick and Morty",
      description:
        "The fractured domestic lives of a nihilistic mad scientist and his anxious grandson are further complicated by their inter-dimensional misadventures.",
      director: "Wesley Archer",
      stars: "Chris Parnell - Spencer Grammer - Sarah Chalke",
      year: "2013 - ",
      noOfSeries: "10",
    },
    {
      id: "s4",
      image:
        "https://m.media-amazon.com/images/M/MV5BMWEzNTFlMTQtMzhjOS00MzQ1LWJjNjgtY2RhMjFhYjQwYjIzXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
      title: "Sherlock",
      description:
        "The quirky spin on Conan Doyle's iconic sleuth pitches him as a high-functioning sociopath in modern-day London. Assisting him in his investigations: Afghanistan War vet John Watson, who's introduced to Holmes by a mutual acquaintance.",
      director: "Mark Gatiss - Steven Moffatn",
      stars: "Benedict Cumberbatch - Martin Freeman - Una Stubbst",
      year: "2010 - 2017",
      noOfSeries: "4",
    },
    {
      id: "s5",
      image:
        "https://m.media-amazon.com/images/M/MV5BZDA4YmE0OTYtMmRmNS00Mzk2LTlhM2MtNjk4NzBjZGE1MmIyXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
      title: "Better Call Saul",
      description:
        "The trials and tribulations of criminal lawyer Jimmy McGill in the years leading up to his fateful run-in with Walter White and Jesse Pinkman.",
      director: "Vince Gilligan - Peter Gould",
      stars: "Bob Odenkirk - Rhea Seehorn - Jonathan Banks",
      year: "2015 - 2022",
      noOfSeries: "6",
    },
    {
      id: "s6",
      image:
        "https://m.media-amazon.com/images/M/MV5BOTJkNzJmYzgtZTZmNC00MTQ2LWE2ZGQtM2EyYjliNGViMTY5XkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_FMjpg_UX1000_.jpg",
      title: "Şahsiyet",
      description:
        "Agah's monotonous life is turned upside down when he is diagnosed with Alzheimer's disease. Because of his illness, he will sooner or later forget all his memories. Although Agah is initially confused by this truth, he realizes that forgetting is an opportunity.",
      director: "Onur Saylak",
      stars: "Halu Bilginer - Cansu Dere",
      year: "2018 - ",
      noOfSeries: "2",
    },
  ]);

  const tvShowCtx = {
    items: tvShowList,
  };

  return (
    <TVShowContext.Provider value={tvShowCtx}>
      {children}
    </TVShowContext.Provider>
  );
}

export default TVShowContext;
