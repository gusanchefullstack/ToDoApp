import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { v4 as uuid} from "uuid"

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
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

  const addToDo = (text) => {
    const updatedListOfTodos = [...todos];
    updatedListOfTodos.push({
      id: uuid(),
      text,
      completed: false,
    });
    saveTodos(updatedListOfTodos);
  };

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
        addToDo,
        finishTodo,
        deleteTodo,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoProvider, TodoContext };
