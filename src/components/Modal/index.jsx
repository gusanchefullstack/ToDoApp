import React from "react";
import { createPortal } from "react-dom";

function Modal({ children }) {
  return createPortal(
      <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/50">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md mx-4 text-center">
          { children}
        </div>
      </div>,
    document.getElementById("modal"),
  );
}

export { Modal };
