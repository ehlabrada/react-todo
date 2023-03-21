import { useState } from "react";

const useTodos = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      description: "Buy the bread",
      isCompleted: false,
      isPinned: false,
      dueDate: new Date(2023, 2, 21),
    },
    {
      id: 2,
      description: "Fix the sink",
      isCompleted: true,
      isPinned: false,
      dueDate: new Date(2023, 2, 22),
    },
  ]);

  // Initial function to help to create todos (pure function)
  const createTodo = (value) => {
    return {
      id: todos.length + 1,
      description: value,
      isCompleted: false,
      isPinned: false,
      dueDate: new Date(),
    };
  }

  const addTodo = (value) => {
    setTodos([createTodo(value), ...todos]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const pinTodo = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, isPinned: true } : todo))
    );
  };

  const unpinTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isPinned: false } : todo
      )
    );
  };

  return {
    todos: todos,
    add: addTodo,
    delete: deleteTodo,
    pinTodo: pinTodo,
    unpinTodo: unpinTodo,
  };
};

export default useTodos;
