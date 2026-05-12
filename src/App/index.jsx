import React from "react";
import AppUI from "./AppUI";
import "./App.css";
import { TodoProvider } from "../context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;







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
