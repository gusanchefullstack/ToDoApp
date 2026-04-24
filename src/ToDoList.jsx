import ToDoItem from "./ToDoItem";


const ToDoList = ({children}) => {
    return (
    <ul className="flex flex-col gap-3 w-full py-2">
      {children}
    </ul>
  );
};

export default ToDoList;
