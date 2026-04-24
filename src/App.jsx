import { useState } from "react";
import "./App.css";
import ToDoCounter from "./ToDoCounter";
import ToDoSearch from "./ToDoSearch";
import ToDoList from "./ToDoList";
import CreateToDoButton from "./CreateToDoButton";
import ToDoItem from "./ToDoItem";

function App() {
  const listOfTasks = [
    { id: 1, text: "Estudiar React", completed: false },
    { id: 2, text: "Configurar el entorno de Node.js", completed: false },
    { id: 3, text: "Leer documentación de Tailwind CSS", completed: false },
    { id: 4, text: "Practicar Hooks de React", completed: false },
    { id: 5, text: "Maquetar la página de inicio", completed: false },
    { id: 6, text: "Revisar conceptos de JavaScript ES6", completed: false },
    { id: 7, text: "Configurar repositorio en GitHub", completed: false },
    { id: 8, text: "Aprender sobre Fetch API", completed: false },
    { id: 9, text: "Optimizar rendimiento de imágenes", completed: false },
    { id: 10, text: "Realizar pruebas unitarias con Jest", completed: false },
  ];
  const [searchValue, setSearchValue] = useState("");
  const [todos, setTodos] = useState(listOfTasks);
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase()),
  );
  const finishTodo = (todoId) => {
    const updatedListOfTodos = [...todos]
    const todoIndex = updatedListOfTodos.findIndex((todo) => todo.id === todoId)
    updatedListOfTodos[todoIndex].completed = true
    setTodos(updatedListOfTodos)
  }
   const deleteTodo = (todoId) => {
    const updatedListOfTodos = [...todos]
    const todoIndex = updatedListOfTodos.findIndex((todo) => todo.id === todoId)
    updatedListOfTodos.splice(todoIndex,1)
    setTodos(updatedListOfTodos)
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-start justify-center pt-16 pb-24 px-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-5xl text-blue-600 font-extrabold text-center mb-2">
          ToDo App
        </h1>
        <ToDoCounter total={todos.length} completed={completedTodos} />
        <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <ToDoList>
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
        <CreateToDoButton />
      </div>
    </div>
  );
}

export default App;
