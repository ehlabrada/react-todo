import { useEffect, useState } from "react";

const useTodos = (currentDate, timeFrequency) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      description: "Buy the bread",
      isCompleted: false,
      isPinned: false,
      creationDate: new Date(2023, 2, 21),
      dueDate: new Date("2023-03-21T14:53:00"),
    },
    {
      id: 2,
      description: "Fix the sink",
      isCompleted: true,
      isPinned: false,
      creationDate: new Date(2023, 2, 22),
      dueDate: new Date(2023, 2, 22),
    },
    {
      id: 3,
      description: "Paint the house",
      isCompleted: true,
      isPinned: false,
      creationDate: new Date(2023, 2, 21),
      dueDate: new Date(2023, 2, 21),
    },
    {
      id: 4,
      description: "Watch soccer",
      isCompleted: true,
      isPinned: false,
      creationDate: new Date(2023, 2, 21),
      dueDate: new Date(2023, 2, 21),
    },
    {
      id: 5,
      description: "Cook",
      isCompleted: false,
      isPinned: false,
      creationDate: new Date(2023, 2, 19),
      dueDate: new Date(2023, 2, 20),
    },
  ]);

  console.log("ALLTODOS", todos)

  // Initial function to help to create todos (pure function)
  const createTodo = (value, dueDate) => {
    return {
      id: todos.length + 1,
      description: value,
      isCompleted: false,
      isPinned: false,
      creationDate: new Date(),
      dueDate: new Date(dueDate+'T'+"23:59:59"),
    };
  };

    let todosFiltered = (function() {
      let todos_ = null
      if (timeFrequency === "daily") {
        todos_ = todos.filter((todo) => {
          return (
              todo.dueDate.getFullYear() === currentDate.getFullYear() &&
              todo.dueDate.getMonth() === currentDate.getMonth() &&
              todo.dueDate.getDate() === currentDate.getDate()
          );
        });
      } else if (timeFrequency === "monthly") {
        todos_ = todos.filter((todo) => {
          return todo.dueDate.getMonth() === currentDate.getMonth();
        });
      } else if (timeFrequency === "yearly") {
        todos_ = todos.filter((todo) => {
          return todo.dueDate.getFullYear() === currentDate.getFullYear();
        });
      }
      return todos_
    }());


  console.log("Todos filtered",todosFiltered)

  let pinnedTodos = todos.filter((todo) => todo.isPinned);

  const addTodo = (value, dueDate) => {
    console.log("DUE DATE",dueDate)
    setTodos([createTodo(value, dueDate), ...todos]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleCheckTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              isCompleted: !todo.isCompleted,
              isPinned: todo.isCompleted && todo.isPinned,
            }
          : todo
      )
    );
  };

  const handlePin = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isPinned: !todo.isPinned } : todo
      )
    );
  };

  return {
    todos: todosFiltered,
    pinnedTodos: pinnedTodos,
    onAdd: addTodo,
    onDelete: deleteTodo,
    onPin: handlePin,
    onCheck: handleCheckTodo,
  };
};

export default useTodos;
