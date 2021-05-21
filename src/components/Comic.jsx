import React, { useState, useEffect } from "react";
import "../sass/comic.scss";

const Comic = () => {
  const [Comic, setComic] = useState([]);

  useEffect(() => randomComic(), []);

  const randomComic = async () => {
    var comicNumber = Math.round(Math.random() * (672 - 1) + 1);

    try {
      await fetch(`https://rickandmortyapi.com/api/character/${comicNumber}`)
        .then((Response) => Response.json())
        .then((data) => setComic(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="comicContainer">
      <h1 className="comicContainer__tittle">{Comic.name}</h1>
      <img
        className="comicContainer__image"
        src={Comic.image}
        alt={Comic.name}
      />
      <button className="comicContainer__button" onClick={randomComic}>
        New Random Comic
      </button>
    </div>
  );
};

export default Comic;
