import { useContext, useState } from "react";
import "./App.css";
import { Context } from "./context/context";
import Compo from "./Compo";

function App() {
  const { count, dispatch } = useContext(Context);
  const [state, setState] = useState(``);
  const func = (ar) => {
    setState(ar);
  };
  return (
    <>
      <p>{state}</p>
      <Compo func={func} />
      <p>{count}</p>
      <button onClick={() => dispatch({ type: "ADD" })}>Count</button>
    </>
  );
}

export default App;
