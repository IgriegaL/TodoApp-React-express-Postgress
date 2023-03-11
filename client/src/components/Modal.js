import React from "react";
import { useState } from "react";

function Modal({ mode, setShowModal, task }) {
  const editMode = mode === "edit" ? true : false;
  console.log("Task :  ---> " + task);
  const [data, setData] = useState({
    // si viene el email = task.user_email si no, null
    user_email: editMode ? task.user_email : "bob@gmail.com",
    title: editMode ? task.title : null,
    progress: editMode ? task.progress : 50,
    date: editMode ? "" : new Date(),
  });
  console.log('DATA PROGRESS' + data.progress)
  
  console.log('DATA ::: ' + data)
  const postData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      //const responseData = await response.json();
      //console.log('Response : ', response.body);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  console.log("setShowModal: " + setShowModal);
  const handleCloseModal = () => {
    setShowModal(false);
    console.log("Modal closed");
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h3>Lets {mode} you task</h3>
          <button onClick={handleCloseModal}>x</button>
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
          <input
            className={mode}
            type="submit"
            onClick={editMode ? "" : postData}
          ></input>
        </form>
      </div>
    </div>
  );
}

export default Modal;
