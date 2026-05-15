import ToDoCounter from "../components/ToDoCounter";
import ToDoSearch from "../components/ToDoSearch";
import ToDoList from "../components/ToDoList";
import CreateToDoButton from "../components/CreateToDoButton";
import ToDoItem from "../components/ToDoItem";
import { TodosLoading } from "../components/TodosLoading";
import { TodosError } from "../components/TodosError";
import { CreateFirstTodo } from "../components/CreateFirstTodo";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { Modal } from "../components/Modal";
import { AddTodoForm } from "../components/AddTodoForm";

function AppUI() {
  const { loading, error, searchedTodos, finishTodo, deleteTodo, openModal, setOpenModal } =
    useContext(TodoContext);
  return (
    <div className="min-h-screen bg-slate-100 flex items-start justify-center pt-16 pb-24 px-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-5xl text-blue-600 font-extrabold text-center mb-2">
          ToDo App
        </h1>
        <ToDoCounter />
        <ToDoSearch />
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {!loading && searchedTodos.length == 0 && <CreateFirstTodo />}
        <ToDoList>
          {console.log(searchedTodos)}
          {searchedTodos.map((task) => (
            <ToDoItem
              key={task.id}
              text={task.text}
              completed={task.completed}
              onComplete={() => finishTodo(task.id)}
              onDelete={() => deleteTodo(task.id)}
            />
          ))}
        </ToDoList>
        <CreateToDoButton setOpenModal={setOpenModal} />
        {openModal && (
        <Modal>
          <AddTodoForm/>
        </Modal>
      )}
      </div>
    </div>
  );
}

export default AppUI;
