import { useState } from "react";
import "./App.css";
import Button from "./components/button";

import Counter from "./components/counter";

import TodoItem from "./components/todoItem/TodoItem";
import TodoList from "./components/todoList";

function App() {
  return (
    <div className="App">
      {/*  <h2>Oggi stiamo vedendo le props</h2>
      <Button textContent="Accetta" />
      <Button textContent="rifiuta" isPassive ={true}/>
      <Counter/>
      <h1>ciao</h1>
      <h2>ciao</h2> */}
      <TodoList filterLenght1={32}  />
      <TodoList filterLenght2={24} />
      <TodoList filterLenght3={16} />
    </div>
  );
}

export default App;
