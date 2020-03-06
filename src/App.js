import React, { useState, useEffect, createElement } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState({
    findWord: ""
  });
  const [sampleParagraph, setSampleParagraph] = useState(
    "The German automaker's refreshed logo ditches the black ring for a transparent circle. The rest of it, including the typeface, has a flatter and more modern look. The blue and white emblem inside the ring remains."
  );
  const [showWord, setShowWord] = useState([]);

  useEffect(() => {
    findTheWord(inputValue.findWord);
  }, [inputValue.findWord]);

  const onChangeHandler = e => {
    setInputValue({
      [e.target.name]: e.target.value
    });
  };

  const findTheWord = findWord => {
    const splittedParagraph = sampleParagraph.split(" ");    
    const wordFound = [];

    splittedParagraph.forEach((word, i) => {
      const regexWord = word.match(/[a-z]+|\d+/gi).join("");
      if (regexWord === findWord) {
        const spanWord = createElement(
          "span",
          { style: { color: "dodgerBlue" } },
          word
        );
        wordFound.push(spanWord);
      } else {
        wordFound.push(word);
      }
      setShowWord(wordFound);
    });
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h3>Find word: {inputValue.findWord}</h3>
        <form>
          <input
            type={"text"}
            name={"findWord"}
            value={inputValue.text}
            onChange={e => onChangeHandler(e)}
          />
        </form>

        <br />
        <br />
        <div>
          {showWord.map(word => (
            <span>{word} </span>
          ))}
          {/* {showWord.map(word => word) } */}
        </div>
      </div>
    </div>
  );
}
