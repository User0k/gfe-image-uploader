import CloseIcon from "../../icons/close.svg?react";
import { DialogHTMLAttributes, ReactNode, type RefObject } from "react";

export interface ModalProps {
  ref: RefObject<HTMLDialogElement | null>;
  title: string;
  children?: ReactNode;
}

export function Modal({
  ref,
  title,
  children,
}: DialogHTMLAttributes<HTMLDialogElement> & ModalProps) {
  return (
    <dialog
      ref={ref}
      className="z-1 m-auto max-h-[90%] overflow-auto rounded-lg px-5 py-6 backdrop:bg-neutral-950 backdrop:opacity-70"
    >
      <div className="modal-content">
        <h2 className="flex items-center justify-between pb-2 font-medium text-xl text-gray-900">
          {title}
          <button
            className="cursor-pointer"
            onClick={() => ref.current?.close()}
          >
            <CloseIcon className="w-4 h-4 fill-gray-500 hover:fill-red-600" />
          </button>
        </h2>
        {children}
      </div>
    </dialog>
  );
}
