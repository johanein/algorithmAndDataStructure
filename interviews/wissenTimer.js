import * as React from "react";
import "./style.css";

export default function App() {
  const [count, setCount] = React.useState(0);
  const timer = React.useRef(null);
  const timingFunction = () => {
    timer.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  };
  const handleButtonClick = (e) => {
    const name = e.target.name;
    console.log(name);
    switch (name) {
      case "start":
        if (timer.current) {
          clearInterval(timer.current);
        }
        setCount(0);
        timingFunction();
        break;
      case "stop":
        clearInterval(timer.current);
        break;
      case "resume":
        if (timer.current) {
          clearInterval(timer.current);
        }
        timingFunction();
        break;
      case "reset":
        setCount(0);
        clearInterval(timer.current);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <button name="start" onClick={handleButtonClick}>
        Start
      </button>
      <button name="stop" onClick={handleButtonClick}>
        stop
      </button>
      <button name="resume" onClick={handleButtonClick}>
        resume
      </button>
      <button name="reset" onClick={handleButtonClick}>
        reset
      </button>
      <h1>{count}</h1>
    </div>
  );
}
