import React, { useState, useEffect } from "react";

const Comic = () => {
  const [Comic, setComic] = useState([]);

  useEffect(() => randomComic, []);

  const randomComic = () => {
    var comicNumber = Math.round(Math.random() * (1466 - 1) + 1);
    fetch(
      `https://cors-anywhere.herokuapp.com/http://xkcd.com/${comicNumber}/info.0.json`
    )
      .then((Response) => Response.json())
      .then((data) => setComic(data));
  };

  return (
    <div>
      <h1>{Comic.title}</h1>
      <img src={Comic.img} alt={Comic.alt} />
      <button onClick={randomComic}>New Random Comic</button>
    </div>
  );
};

export default Comic;
