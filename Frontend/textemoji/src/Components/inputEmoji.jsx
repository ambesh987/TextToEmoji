import React, { useEffect, useState } from "react";
import "./inputEmoji.css";

const InputEmoji = () => {
  const [input, setInput] = useState("");
  const [allData, setAllData] = useState([]);
  const emojiMap = {
    "::smiley::": "😀",
    "::sad::": "😫",
    "::smiley::": "😊",
  };

  const handleChange = (e) => {
    let { value } = e.target;

    var regex  = new RegExp(Object.keys(emojiMap).join("|"), "gi");
    value = value.replace(regex, function (matched) {
      return emojiMap[matched];
    });

    setInput(value);
  };

  const post = () => {
    const payload = {
      string: input,
    };
    fetch("http://localhost:3000/input/upload", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": true,
      },
      method: "POST",
      body: JSON.stringify(payload),
    })
      .then((res) => res.status(200))
      .catch((err) => new Error(err.message))
      .finally(fetchData);

    setInput("");
  };

  const fetchData = () => {
    fetch("http://localhost:3000/input/alldata")
      .then((res) => res.json())
      .then((res) => setAllData(res.inputData));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h3>Convert text to Emoji😊</h3>
      <div id="input-container">
        <input
          type="text"
          placeholder="type your favorite emoji!"
          onChange={handleChange}
          value={input}
          id="input_box"
        ></input>
        <button onClick={post}>Add Now</button>
      </div>
      <div id="container">
        <ol>
          {allData.map(({ string }) => (
            <li key={string}>{string}</li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default InputEmoji;