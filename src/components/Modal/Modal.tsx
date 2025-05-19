import {
  DialogHTMLAttributes,
  MouseEventHandler,
  ReactNode,
  type RefObject,
} from "react";
import CloseIcon from "../../icons/close.svg?react";

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
  const handleBackdropClick: MouseEventHandler<HTMLDialogElement> = (e) => {
    if (ref && e.target === ref.current) {
      const contentRect = ref.current.getBoundingClientRect();
      const isOutsideContent =
        e.clientX < contentRect.left ||
        e.clientX > contentRect.right ||
        e.clientY < contentRect.top ||
        e.clientY > contentRect.bottom;

      if (isOutsideContent) {
        ref.current?.close();
      }
    }
  };

  return (
    <dialog
      ref={ref}
      onClick={handleBackdropClick}
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
