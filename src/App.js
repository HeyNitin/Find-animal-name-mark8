import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🐕": "Dog",
  "🐒": "Monkey",
  "🐵": "Monkey Face",
  "🦍": "Gorilla",
  "🐕‍🦺": "Service Dog",
  "🐈": "Cat",
  "🦁": "Lion",
  "🐅": "Tiger",
  "🦄": "Unicorn",
  "🦌": "Deer"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [emojiDescription, setemojiDescription] = useState("");

  function changeHandler(event) {
    var emoji = event.target.value;

    var emojiDescription = emojiDictionary[emoji];

    setemojiDescription(emojiDescription);

    if (emojiDescription === undefined) {
      setemojiDescription("We don't have that");
    }
  }

  function emojiClickHandler(emoji) {
    var emojiDescription = emojiDictionary[emoji];

    setemojiDescription(emojiDescription);
  }

  return (
    <div className="App">
      <h1>Animal search</h1>

      <input onChange={changeHandler}></input>

      <div id="des">{emojiDescription}</div>

      <h2>These are the animals we know</h2>

      {emojiWeKnow.map((emoji) => {
        return (
          <span
            id="emojis"
            onClick={() => emojiClickHandler(emoji)}
            style={{ cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
