import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "./components/Button";
import Form from "./components/Form";
import Header from "./components/Header";
import Image from "./components/Image";
import MemeText from "./components/MemeText";

function App() {
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [memeData, setMemeData] = useState({});
  const [image, setImage] = useState("");

  function randomNumberGenerator() {
    const randomInt = Math.floor(Math.random() * 101);
    return randomInt;
  }

  useEffect(() => {
    const apiUrl = "https://api.imgflip.com/get_memes";
    axios
      .get(apiUrl)
      .then((response) => {
        setMemeData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSubmit = () => {
    setImage(memeData.data.memes[randomNumberGenerator()].url);
  };

  return (
    <div>
      <Header />
      <div className="form">
        <Form
          inputOne={inputOne}
          inputTwo={inputTwo}
          setInputOne={(e) => setInputOne(e.target.value)}
          setInputTwo={(e) => setInputTwo(e.target.value)}
        />
        <Button onClick={handleSubmit} />
      </div>
      {memeData !== "" && (
        <div className="container img-wrapper">
          <Image memeImage={image} />
          <div className="top-text">
            <MemeText text={inputOne} />
          </div>
          <div className="bottom-text">
            <MemeText text={inputTwo} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
