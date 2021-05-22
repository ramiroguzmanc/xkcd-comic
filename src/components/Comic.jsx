import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import Rating from "@material-ui/lab/Rating";
import { Button, Typography, Box } from "@material-ui/core";
import "../sass/comic.scss";

const Comic = () => {
  const [Comic, setComic] = useState([]);
  const [value, setValue] = useState(2);

  useEffect(() => randomComic(), []);

  const randomComic = async () => {
    var comicNumber = Math.round(Math.random() * (672 - 1) + 1);
    var randomRate = Math.random() * (4.5 - 1) + 1;
    setValue(randomRate);
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

      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Rate this Comic!</Typography>
        <Rating
          name="hover-feedback"
          value={value}
          precision={0.5}
          size="large"
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>

      <Button
        className="comicContainer__button"
        onClick={randomComic}
        color="primary"
        variant="contained"
      >
        New Random Comic
      </Button>
    </div>
  );
=======

const Comic = () => {
  const [Comic, setComic] = useState([]);
  var a = 614;
  useEffect(() => {
    fetch(`https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json`)
      .then((Response) => Response.json())
      .then((data) => console.log(data));
  }, []);

  return <div></div>;
>>>>>>> c7f9eda3cc8bbdca85b4ed33541855f3aea1cab8
};

export default Comic;
