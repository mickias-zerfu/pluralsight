import React, { useState } from "react";

const InputElement = () => {
  const [inputText, setInputText] = useState("");
  const [history, setHistory] = useState([]);

  const stateChange = (e) => {
    setInputText(e.target.value);
    setHistory([...history, e.target.value]);
  };

  return (
    <div>
      <input placeholder="Email ..." onChange={stateChange} />
      <p>{inputText}</p>
      <ul>
        {" "}
        {history.map((his) => {
          return <li>{his}</li>;
        })}
      </ul>
    </div>
  );
};
export default InputElement;
