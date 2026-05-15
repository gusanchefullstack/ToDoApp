import { useState } from "react";

import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

const AddTodoForm = () => {
  const { setOpenModal, addToDo } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState("");

  function submitAddTodo(event) {
    event.preventDefault();
    addToDo(newTodoValue);
    setOpenModal(false);
  }
  function cancelAddTodo() {
    setOpenModal(false);
  }

  function onChangeTextArea(event) {
    setNewTodoValue(event.target.value);
  }
  return (
    <form className="flex flex-col gap-4 text-left" onSubmit={submitAddTodo}>
      <label htmlFor="addTodo" className="text-sm font-medium text-gray-700">
        Escribe tu nuevo ToDo
      </label>
      <textarea
        name="addTodo"
        id="addTodo"
        placeholder="Clean my room"
        className="w-full rounded-lg border border-gray-300 p-3 text-sm text-gray-800 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        rows={4}
        onChange={onChangeTextArea}
      ></textarea>
      <div className="flex justify-between items-center gap-3">
        <button
          type="button"
          onClick={cancelAddTodo}
          className="flex-1 rounded-lg border border-gray-300 py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="flex-1 rounded-lg bg-blue-600 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export { AddTodoForm };
