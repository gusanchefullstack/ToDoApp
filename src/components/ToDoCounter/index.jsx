const ToDoCount = ({ completed, total }) => {
  return completed === total ? (
    <p className="text-lg font-medium text-slate-500 text-center mt-2 mb-6 border-b border-slate-200 pb-6">
      Felicitaciones! 👏👏👏 Usa tu tiempo para algo más
    </p>
  ) : (
    <p className="text-lg font-medium text-slate-500 text-center mt-2 mb-6 border-b border-slate-200 pb-6">
      Completados <span className="font-bold text-indigo-600">{completed}</span>{" "}
      de <span className="font-bold text-indigo-600">{total}</span> tareas
    </p>
  );
};
export default ToDoCount;
