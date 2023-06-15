import "./index.css";
import { todos } from "../mocks/todos";
import TodoItem from "../todoItem/TodoItem";
import { useState } from "react";

const TodoList = (props) => {
  const [todoList, setTodoList] = useState(todos);
  
  const onHandleTodosFilter = (nChars) => {
    setTodoList(todos);
    setTodoList(todoList.filter((todo) => todo.title.length <= nChars));
  };

  const onClearFilter = ()=>setTodoList(todos)

  return (
    <div className="TodoList">
      <div className="TodoList__info">
        <h4>TODO</h4>
        <p>{todoList.length}</p>
        <button onClick={() => onHandleTodosFilter(props.filterLenght1)}>Filtra per {props.filterLenght1}</button>
        <button onClick={() => onHandleTodosFilter(props.filterLenght2)}>Filtra per {props.filterLenght2}</button>
        <button onClick={() => onHandleTodosFilter(props.filterLenght3)}>Filtra per {props.filterLenght3}</button>
        <button onClick={onClearFilter}>Clear</button>
      </div>
      {todoList.map((todo) => (
        <TodoItem data={todo} key={todo.id} />
      ))}

    </div>
  );
};

export default TodoList;

{/*       {onFilterTodos(todoList, 30).map((todo) => (
    <TodoItem data={todo} key={todo.id} />
))} */}
/* 
const onFilterTodos = (arr, nWords) =>
  arr.filter((i) => i.title.lenght <= nWords); */