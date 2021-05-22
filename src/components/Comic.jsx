import React, { useState, useEffect } from "react";
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

      <h4>
        Status: {Comic.status} | Species: {Comic.species} | Gender:{" "}
        {Comic.gender}
      </h4>

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
};

export default Comic;
