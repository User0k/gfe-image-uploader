import { twMerge } from "tailwind-merge";
import CloseIcon from "./icons/close.svg?react";

const styles = {
  shape:
    "flex gap-1 justify-between items-center cursor-pointer rounded-md p-2",
  btnColors: "bg-indigo-600 text-white",
  icon: "",
};

function App() {
  return (
    <button className={twMerge(styles.shape, styles.btnColors)}>
      <CloseIcon className="w-4 h-4 fill-white" />
      Button
    </button>
  );
}

export default App;
