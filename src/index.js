import React, { useState } from "react";
import ReactDOM from "react-dom";
import Iframe from "./iframe.js";

import "./styles.css";

function ImageComponent({ imageUrl }) {
  return (
    <div>
      <img src={imageUrl} alt="Menu Item" width="700" />
    </div>
  );
}

function App() {
  const [imageUrl, setImageUrl] = useState("");

  const handleInputChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform any validation or processing here before rendering the images
  };

  return (
    <div className="App">
      <h1>Better Chinglish</h1>
      <h2>Transcription App for Chinese-Americans</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={imageUrl}
          onChange={handleInputChange}
          placeholder="Enter image URL"
          style={{ fontSize: "16px" }} // Increase the font size here
        />
      </form>

      {imageUrl && <ImageComponent imageUrl={imageUrl} />}
      <p style={{ float: "left" }}>
        Credits -{" "}
        <a
          href="https://www.qhanzi.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          qhanzi
        </a>
        , Ben Burlock
      </p>
      <Iframe
        // url="http://www.youtube.com/embed/xDMP3i36naA"
        url="https://www.qhanzi.com/"
        height="800px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen
        allow="clipboard-read; clipboard-write"
      />

      <p style={{ float: "left" }}>
        Credits -{" "}
        <a
          href="https://www.bing.com/translator?to=en&setlang=si"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bing Translator, Microsoft
        </a>
      </p>
      <Iframe
        // url="http://www.youtube.com/embed/xDMP3i36naA"
        url="https://www.bing.com/translator?to=en&setlang=si"
        height="1000px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen
        allow="clipboard-read; clipboard-write"
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
