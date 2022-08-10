import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import React from "react";
import Title from "./components/Title";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import Login from './components/login';
import Signup from './components/signup';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from 'react-router-dom';
import ProtectedRoute from './components/protectedRoute';
import { UserAuthContextProvider } from "./context/userAuthContext";

function App(){
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

 
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <Router>
      
      <UserAuthContextProvider> 
      <Routes>
      <Route path= '/home' element={
        <ProtectedRoute>
      <div>
        <Title />
      </div>
      <div>
        <AddTodo />
      </div>
      <div className="todo_container">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
           
          />
        ))}
      </div>
      </ProtectedRoute>} />
    <Route path= '/' element={<Login/>} />
    <Route path= 'signup' element={<Signup/>}/>
    </Routes>
    </UserAuthContextProvider> 
    </Router>
  )
}

export default App;