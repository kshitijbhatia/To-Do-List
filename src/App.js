import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newItem = event.target.value;
    setInputText(newItem);
  }

  function AddToList() {
    setItems((prevValue) => {
      return [...prevValue, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={AddToList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((itemsToDo) => {
            return <li>{itemsToDo}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
