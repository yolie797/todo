import React from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";

export default function AddTodo() {
  const [title, setTitle] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        completed: false,
      });
      setTitle("");
    };
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="input_container">
        <input
          type="text"
          placeholder="Enter todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}/>
  <label>
      Priority
    <select name="priority" id="priority">

        <option value="Low" >Low</option>
        <option value="Medium" >Medium</option>
        <option value="High" >High</option>
    </select>
    <br></br>
    </label>
      </div>

      <div className="btn_container">
        <button>Add</button>
      </div>

  
    </form>
  );
}
