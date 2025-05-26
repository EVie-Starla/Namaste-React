import React from "react";
import ReactDOM from "react-dom/client";
import useToggle from "./useToggle";

const ToggleComponent = () => {
  const [toggleStatus, setToggleStatus] = useToggle();
  return (
    <div className="toggle-btn-container">
      <button className="toggle-btn" onClick={setToggleStatus}>{toggleStatus ? "ON" : "OFF"}</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ToggleComponent />);
