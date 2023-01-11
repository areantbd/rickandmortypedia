import React, { useEffect, useState } from "react";
import { getCharacters } from "rickmortyapi";
import CharacterCard from "../../components/characters-card/CharacterCard";
import loading from "../../assets/images/giphy.gif";

function CharactersScreen() {
  let actPage = Number(localStorage.getItem("charPage"));
  const [chars, setChars] = useState(null);
  const [actualPage, setPage] = useState(actPage);
  const [search, setSearch] = useState("");
  localStorage.setItem("charPage", actualPage);

  useEffect(() => {
    getCharacters({
      page: actualPage,
      status: "",
      name: search || "",
    })
      .then((data) => {
        setChars(data);
      })
      .catch((error) => console.error(error));
  }, [actualPage, search]);

  if (actualPage < 1) {
    setPage(1);
  }

  if (actualPage > chars?.data?.info?.pages) {
    setPage(chars?.data?.info?.pages);
  }

  function handleUp() {
    setPage(actualPage + 1);
  }
  function handleDown() {
    setPage(actualPage - 1);
  }
  function handleFirst() {
    setPage(1);
  }
  function handleLast() {
    setPage(chars.data.info.pages);
  }

  return chars ? (
    <div className="container pad-bot screen">
      <h3 className="text-center my-3 text-light font-face">Characters</h3>
      <div className="d-flex justify-content-between border px-3 py-2 text-light  font-face">
        <h6>Total characters: {chars?.data?.info?.count}</h6>
        <h6>Total pages: {chars?.data?.info?.pages}</h6>
      </div>
      <form className="mt-2 text-center font-face">
        <input
          type="text"
          value={search}
          onChange={(ev) => {
            setSearch(ev.target.value);
            setPage(1);
          }}
          placeholder="Search character"
        ></input>
      </form>
      <div className="d-flex justify-content-center gap-5 my-3">
        {actualPage > 1 && (
          <div className="d-flex gap-1">
            <button
              onClick={handleFirst}
              className="btn btn-sm btn-secondary bg-gradient font-face">
              First
              </button>
            <button
              onClick={handleDown}
              className="btn btn-sm btn-secondary bg-gradient font-face"
            >
              Page down
            </button>
          </div>
        )}
        <h3 className="text-light font-face">{actualPage}</h3>
        {actualPage < chars?.data?.info?.pages && (
          <div className="d-flex gap-1">
            <button
              onClick={handleUp}
              className="btn btn-sm btn-secondary bg-gradient font-face"
            >
              Page up
            </button>
            <button
              onClick={handleLast}
              className="btn btn-sm btn-secondary bg-gradient font-face"
            >
              Last
            </button>
          </div>
        )}
      </div>
      <div className="row">
        {chars?.data?.results?.map((char) => (
          <CharacterCard {...char} key={char.id} />
        ))}
      </div>
      <div className="d-flex justify-content-center gap-5 my-5">
        {actualPage > 1 && (
          <div className="d-flex gap-1">
            <button
              onClick={handleFirst}
              className="btn btn-sm btn-secondary bg-gradient font-face">
              First
              </button>
            <button
              onClick={handleDown}
              className="btn btn-sm btn-secondary bg-gradient font-face"
            >
              Page down
            </button>
          </div>
        )}
        <h3 className="text-light font-face">{actualPage}</h3>
        {actualPage < chars?.data?.info?.pages && (
          <div className="d-flex gap-1">
            <button
              onClick={handleUp}
              className="btn btn-sm btn-secondary bg-gradient font-face"
            >
              Page up
            </button>
            <button
              onClick={handleLast}
              className="btn btn-sm btn-secondary bg-gradient font-face"
            >
              Last
            </button>
          </div>
        )}
      </div>
    </div>
  ) : (
    <>
      <div className="d-flex justify-content-center mt-5 pt-5">
        <img src={loading} alt="loading"></img>
      </div>
    </>
  );
}

export default CharactersScreen;
