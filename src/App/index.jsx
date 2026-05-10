import React from "react";
import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import AppUI from "./AppUI";
import "./App.css";

function App() {
  // const listOfTasks = [
  //   { id: 1, text: "Estudiar React", completed: false },
  //   { id: 2, text: "Configurar el entorno de Node.js", completed: false },
  //   { id: 3, text: "Leer documentación de Tailwind CSS", completed: false },
  //   { id: 4, text: "Practicar Hooks de React", completed: false },
  //   { id: 5, text: "Maquetar la página de inicio", completed: false },
  //   { id: 6, text: "Revisar conceptos de JavaScript ES6", completed: false },
  //   { id: 7, text: "Configurar repositorio en GitHub", completed: false },
  //   { id: 8, text: "Aprender sobre Fetch API", completed: false },
  //   { id: 9, text: "Optimizar rendimiento de imágenes", completed: false },
  //   { id: 10, text: "Realizar pruebas unitarias con Jest", completed: false },
  // ];

  const [searchValue, setSearchValue] = useState("");
  const { item: todos, saveItem: saveTodos, loading, error } =
    useLocalStorage("TODOSv1", []);
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase()),
  );

  const finishTodo = (todoId) => {
    const updatedListOfTodos = [...todos];
    const todoIndex = updatedListOfTodos.findIndex(
      (todo) => todo.id === todoId,
    );
    updatedListOfTodos[todoIndex].completed = true;
    saveTodos(updatedListOfTodos);
  };
  const deleteTodo = (todoId) => {
    const updatedListOfTodos = [...todos];
    const todoIndex = updatedListOfTodos.findIndex(
      (todo) => todo.id === todoId,
    );
    updatedListOfTodos.splice(todoIndex, 1);
    saveTodos(updatedListOfTodos);
  };

  return (
    <AppUI
      loading={loading}
      error={error}
      todos={todos}
      completedTodos={completedTodos}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      finishTodo={finishTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
