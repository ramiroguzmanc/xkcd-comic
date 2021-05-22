import React, { useState, useEffect } from "react";
import Rating from "@material-ui/lab/Rating";
import { Button, Typography, Box } from "@material-ui/core";
import "../sass/character.scss";

const Character = () => {
  const [Character, setCharacter] = useState([]);
  const [value, setValue] = useState(2);

  useEffect(() => randomCharacter(), []);

  const randomCharacter = async () => {
    var comicNumber = Math.round(Math.random() * (672 - 1) + 1);
    var randomRate = Math.random() * (4.5 - 1) + 1;
    setValue(randomRate);
    try {
      await fetch(`https://rickandmortyapi.com/api/character/${comicNumber}`)
        .then((Response) => Response.json())
        .then((data) => setCharacter(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="comicContainer">
      <h1 className="comicContainer__tittle">{Character.name}</h1>
      <img
        className="comicContainer__image"
        src={Character.image}
        alt={Character.name}
      />

      <h4>
        Status: {Character.status} | Species: {Character.species} | Gender:{" "}
        {Character.gender}
      </h4>

      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Rate this Character!</Typography>
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
        onClick={randomCharacter}
        color="primary"
        variant="contained"
      >
        New Random Character
      </Button>
    </div>
  );
};

export default Character;
