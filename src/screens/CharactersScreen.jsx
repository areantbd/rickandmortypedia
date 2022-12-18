import React, { useEffect, useState } from "react";
import { getCharacters } from "rickmortyapi";
import CharacterCard from "../components/characters-card/CharacterCard";
import loading from "../assets/images/giphy.gif";

function CharactersScreen() {
  const [chars, setChars] = useState(null);
  const [actualPage, setPage] = useState(1);
  const [search, setSearch] = useState(null)

  useEffect(() => {
    getCharacters({
      page: actualPage,
      status: "",
      name: search || ""
    })
      .then((data) => setChars(data))
      .catch((error) => console.error(error));
  }, [actualPage, search]);

  if (actualPage < 1) {
    setPage(1);
  }

  if (actualPage > chars?.data?.info?.pages) {
    setPage(chars?.data?.info?.pages);
  }

  console.log(actualPage);
  function handleUp() {
    setPage(actualPage + 1);
  }
  function handleDown() {
    setPage(actualPage - 1);
  }
  return chars ? (
    <div className="container pad-bot screen">
      <h3 className="text-center my-3 text-light">Rick & Morty Characters</h3>
      <div className="d-flex justify-content-between border px-3 py-2 text-light">
        <h6>Total characters: {chars?.data?.info?.count}</h6>
        <h6>Total pages: {chars?.data?.info?.pages}</h6>
      </div>
      <form className="mt-2 text-center">
        <input 
          type="text" 
          value={search} 
          onChange={(ev) => setSearch(ev.target.value)} 
          placeholder="Search character"
          ></input>
      </form>
      <div className="d-flex justify-content-center gap-5 my-3">
        {actualPage > 1 && (
          <button
            onClick={handleDown}
            className="btn btn-sm btn-secondary bg-gradient"
          >
            Page down
          </button>
        )}
        <h3 className="text-light">{actualPage}</h3>
        {actualPage < chars?.data?.info?.pages && (
          <button
            onClick={handleUp}
            className="btn btn-sm btn-secondary bg-gradient"
          >
            Page up
          </button>
        )}
      </div>
      <div className="row">
        {chars?.data?.results?.map((char) => (
          <CharacterCard {...char} key={char.id} />
        ))}
      </div>
      <div className="d-flex justify-content-center gap-5 my-5">
        {actualPage > 1 && (
          <button
            onClick={handleDown}
            className="btn btn-sm btn-secondary bg-gradient"
          >
            Page down
          </button>
        )}
        <h3 className="text-light">{actualPage}</h3>
        {actualPage < chars?.data?.info?.pages && (
          <button
            onClick={handleUp}
            className="btn btn-sm btn-secondary bg-gradient"
          >
            Page up
          </button>
        )}
      </div>
    </div>
  ) : (
    <div>
      <img src={loading} alt="loading"></img>
    </div>
  )
}

export default CharactersScreen;
