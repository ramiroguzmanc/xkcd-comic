import React, { useState, useEffect } from "react";

const Comic = () => {
  const [Comic, setComic] = useState([]);
  var a = 614;
  useEffect(() => {
    fetch(`https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json`)
      .then((Response) => Response.json())
      .then((data) => console.log(data));
  }, []);

  return <div></div>;
};

export default Comic;
