import { BsCheckLg } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { TodoContext } from "../../context/TodoContext";

const ToDoItem = ({onComplete, text, completed, onDelete}) => {
   
  return (
    <li className="flex items-center gap-4 bg-white border border-slate-100 rounded-xl shadow-sm px-4 py-3 hover:shadow-md transition-shadow">
      <button
        className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-bold hover:bg-green-200 transition-colors cursor-pointer"
        onClick={onComplete}
      >
        <BsCheckLg />
      </button>
      <p
        className={`flex-1 text-left text-gray-700 font-semibold ${completed && "line-through"}`}
      >
        {text}
      </p>
      <button
        className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-red-100 text-red-500 font-bold hover:bg-red-200 transition-colors cursor-pointer"
        onClick={onDelete}
      >
        <RxCross2 />
      </button>
    </li>
  );
};

export default ToDoItem;
