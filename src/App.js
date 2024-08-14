import { useState } from "react";
import "./App.css";
import Children1 from "./components/Children1";
import Children2 from "./components/Children2";

function App() {
  let [state, setState] = useState(1);

  // const handleChangeText = () => {
  //   state.includes("updated")
  //     ? setState("hello")
  //     : state == 1
  //     ? setState("updated")
  //     : setState("updated");
  // };

  const handleAdd = () => {
    setState(state + 1);
  };

  const handleReduce = () => {
    state > 0 ? setState(state - 1) : setState(0);
  };

  return (
    <div>
      <Children1 title={state} handleCount={handleAdd}></Children1>
      <Children2></Children2>
    </div>
  );
}

export default App;
