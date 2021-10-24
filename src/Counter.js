import { useReducer } from "react";

function Counter() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return state + 1;
      case "MINUS":
        return state - 1;
      default:
        return state;
    }
  };

  const [number, dispatch] = useReducer(reducer, 0);

  const addFunction = () => {
    dispatch({ type: "ADD" });
  };

  const minusFunction = () => {
    dispatch({ type: "MINUS" });
  };

  return (
    <div>
      <h1>{number}</h1>
      <button
        onClick={() => {
          addFunction();
        }}
      >
        add
      </button>
      <button
        onClick={() => {
          minusFunction();
        }}
      >
        minus
      </button>
    </div>
  );
}

export default Counter;
