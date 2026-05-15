
const CreateToDoButton = ({setOpenModal}) => {
  
  return (
    <div
      className="fixed bottom-8 right-8 z-[60] w-14 h-14 bg-blue-600 text-white text-3xl rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 hover:scale-110 transition-all cursor-pointer select-none"
      onClick={() => setOpenModal(state => !state)}
    >
      +
    </div>
  );
};

export default CreateToDoButton;
