import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
const TodoContext = createContext();

function TodoProvider({ children }) {
  const [searchValue, setSearchValue] = useState("");
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOSv1", []);
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

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
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        finishTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoProvider, TodoContext };
