import React from "react";
import { useState } from "react";

function Modal({ mode, setShowModal }) {
  console.log(setShowModal);
  const editMode = mode === "edit" ? true : false;

  const [data, setData] = useState({
    use_email: "",
    title: "",
    progress: "",
    date: editMode ? "" : new Date(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h3>Lets {mode} you task</h3>
          <button
            onClick={() => {
              setShowModal(false);
              console.log(setShowModal(false));
            }}
          >
            x
          </button>
        </div>
        <form>
          <input
            required
            maxLength={30}
            placeholder="Your task here"
            name="title"
            value={data.title}
            onChange={handleChange}
          ></input>
          <br />
          <label for="range">Select your current progress</label>
          <input
            required
            type="range"
            id="range"
            min="0"
            max="100"
            name="progress"
            value={data.progress}
            onChange={handleChange}
          ></input>
          <input className={mode} type="submit"></input>
        </form>
      </div>
    </div>
  );
}

export default Modal;
