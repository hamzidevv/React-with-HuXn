import { useState } from "react";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<string>("");

  const addTodo = (task: string): void => {
    const newTodo: Todo = {
      id: todos.length + 1,
      task,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTodo("");
  };

  const removeTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Add Todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={() => addTodo(todo)}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li>
            {todo.task} {todo.completed ? "(Completed)" : ""}
            <button onClick={() => removeTodo(todo.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
