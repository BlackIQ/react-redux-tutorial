import { useSelector, useDispatch } from "react-redux";

import {
  inc,
  dec,
} from "./actions";

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(inc(5))}>Increase</button>
      &nbsp;
      <button onClick={() => dispatch(dec(5))}>Decrise</button>
    </div>
  );
}

export default App;
