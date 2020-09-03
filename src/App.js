import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import CharacterList from "./components/CharacterList";
import Character from "./components/Character";
import Loader from "./components/Loader";

function App() {
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(true);
  const [characterData, setCharacterData] = useState([]);
  const [sendRequest, setSendRequest] = useState(false);
  const [nextPage, setNextPage] = useState(1);

  const fetchData = async () => {
    setLoader(true);
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${nextPage}`
    );
    const data = await response.json();
    setCharacterData([...characterData, ...data.results]);
    setLoader(false);
    setNextPage(nextPage + 1);
  };

  useEffect(() => {
    fetchData();
  }, [sendRequest]);

  console.log(sendRequest);
  console.log(nextPage);
  console.log(characterData);

  return (
    <div className="App">
      <Header />
      <CharacterList>
        {characterData.map(item => (
          <Character key={item.id} {...item} />
        ))}
      </CharacterList>
      {loader ? <Loader /> : null}
      {!loader ? (
        <button type="button" onClick={fetchData}>
          Load More
        </button>
      ) : null}
    </div>
  );
}

export default App;
