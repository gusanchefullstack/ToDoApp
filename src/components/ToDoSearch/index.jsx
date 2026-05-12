import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

const ToDoSearch = () => {
  const {searchValue, setSearchValue} = useContext(TodoContext)
  return (
    <div className="w-full my-6">
      <input
        className="w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
        type="text"
        name="todo"
        id="todo"
        placeholder="Buscar tarea..."
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </div>
  );
};

export default ToDoSearch;
