import { useReducer } from "react";

// return해야 할것들.. 일단 form. 그 input state를 말함. 그리고 onChange.
// username input과 email input이 변화하였을때. 그런것들을 form에 새롭게 반영해주는것.
// 마지막으로 reset함수. form값을 최초의 input상태로 변환시켜주는것임.
// 여기서는 useCallback을 써서. initialState가 변할때만 이 함수를 다시 만들어주도록 해야함.

// useInput을 useReducer를 활용해서 해보라고?

const inputReducer = (state, action) => {
  switch (action.type) {
    case "ONCHANGE":
      return { ...state, [action.name]: action.value };
    case "RESET":
      console.log("is this working?");
      return { ...initialState };
    default:
      return state;
  }
};

const initialState = {
  username: "",
  email: "",
};

const useInput = () => {
  const [input, dispatch] = useReducer(inputReducer, initialState);

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "ONCHANGE",
      name,
      value,
    });
  };

  const reset = (e) => {
    dispatch({
      type: "RESET",
      initialState: initialState,
    });
  };

  return [input, onChange, reset];
};

export default useInput;

/*
const useInput = (initialInput) => {
  const [input, setInput] = useState(initialInput);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setInput((input) => ({
      ...input,
      [name]: value,
    })); // 여기서 객체를 반환하기 위해서는. 그게 함수 중괄호랑 헷갈리지 않기위해서 ()를 해줘야하는것 같다.
  }, []);

  const reset = useCallback(() => {
    setInput(initialInput);
  }, [initialInput]);

  return [input, onChange, reset];
};

export default useInput;
*/
