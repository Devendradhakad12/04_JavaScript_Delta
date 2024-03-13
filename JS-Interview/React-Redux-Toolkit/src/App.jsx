import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { ADD } from "./redux/slice";
function App() {
  const { count } = useSelector((state) => state.slice);
  const dispatch = useDispatch();
  return (
    <>
      <p>{count}</p>
      <button
        onClick={() => {
          dispatch(ADD());
        }}
      >
        Count
      </button>
    </>
  );
}

export default App;
