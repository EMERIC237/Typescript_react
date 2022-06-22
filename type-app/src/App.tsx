import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./Todo.model";
import { useState } from "react";
function App() {
  const [todos, setTodos] = useState<Todo[]>([{ id: 't1', text: 'Finish  the course' }])
  const onAddHandler = (text: string) => {
    setTodos((prevTodos) => [...prevTodos, {
      id: Math.random().toString(),
      text: text
    }])
  }
  const onDeleteHandler = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }
  return (
    <div className="App">

      <NewTodo onAddHandler={onAddHandler} />
      <TodoList onDeleteHandler={onDeleteHandler} items={todos} />
    </div>
  );
}

export default App;
