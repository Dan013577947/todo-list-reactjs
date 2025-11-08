import { useState } from "react";
import './Main.css'
import Todo from "./Todo";
function Main() {
  const [generateTaskList, setGenerateTaskList] = useState([]);
  const [inputText, setInputText] = useState('');
  const [inputDate, setInputDate] = useState('');

  const addTask = () => {
    if (inputText && inputDate) {
      setGenerateTaskList(prev => [
        ...prev, {
          inputText,
          inputDate
        }
      ]);
      setInputText('');
      setInputDate('');
    }
    else if (!inputText || !inputDate) {
      alert("Kindly fill out all the input fields")
    }

  }

  const handleInput = (event) => {
    setInputText(event.target.value);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (inputText && inputDate) {
        setGenerateTaskList(prev => [
          ...prev, {
            inputText,
            inputDate
          }
        ]);
        setInputText('');
        setInputDate('');
      }
      else if (!inputText || !inputDate) {
        alert("Kindly fill out all the input fields")
      }
    }
  }

  const handleDate = (event) => {
    setInputDate(event.target.value);
  }

  return (
    <div className="main-container">
      <div className="left-section"></div>
      <div className="middle-section">
        <div className="container">
          <input
            type="text"
            placeholder="Add new task"
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            value={inputText}
            className="input-text"
          />
          <input
            type="date"
            onChange={handleDate}
            onKeyDown={handleKeyDown}
            value={inputDate}
            className="input-date"
          />
          <button
            onClick={addTask}
            className="btn-add"
          >Add</button>
          {
            generateTaskList.map((task, index) => {
              return (
                <Todo
                  key={index}
                  task={task}
                  index={index}
                  generateTaskList={generateTaskList}
                  setGenerateTaskList={setGenerateTaskList}
                />
              );
            })
          }

        </div>
      </div>
      <div className="right-section"></div>
    </div>

  );
}

export default Main