import { useState } from "react";
import SideBar from "./components/SideBar";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="p-10">
      <button
        onClick={() => setShow((show) => !show)}
        className="bg-violet-500 text-white py-2 px-4 rounded-md hover:bg-violet-600 transition"
      >
        Toggle Side Bar
      </button>
      <SideBar show={show}>
        <h3 className="bg-gradient-to-b from-sky-400 to-sky-600 text-white p-2 text-center rounded">
          Side Bar Component
        </h3>
      </SideBar>
    </div>
  );
}

export default App;
