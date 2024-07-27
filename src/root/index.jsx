import { useReducer, useState } from "react";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import { students } from "../mock/students";

export const Root = () => {
  const [count, setCount] = useState(1);

  const [cnt, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "plus":
        return state + 1;
      case "minus":
        return state - 1;
      case "amount":
        return state + action.payload;
      default:
        return state;
    }
  }, 1);

  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>CNT: {cnt}</h1>
      <button onClick={() => dispatch({ type: "plus" })}>dispatch plus</button>
      <button onClick={() => dispatch({ type: "minus" })}>
        dispatch minus
      </button>
      <button onClick={() => dispatch({ type: "amount", payload: count })}>
        {count}
      </button>
      <br />
      <button onClick={plus}>plus</button>
      <button onClick={minus}>minus</button>
    </div>
  );
};

export default Root;

{
  /* <Navbar length={data.length} />
<Table data={data} onDelete={onDelete} /> */
}
// lifting state up
// state management — redux-toolkit, contextAPI
// prop drilling

// redux —> redux-saga, redux-thunk —> redux-toolkit, redux-query
// contextAPI + useReducer
