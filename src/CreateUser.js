import { useContext } from "react";
import { InputContext, UserDispatch } from "./App";

export function CreateUser({ nextId }) {
  const useInput = useContext(InputContext); // 이렇게 가져올필요없이 그냥 useInput 쓰면 되지 않나요
  const [dispatch] = useContext(UserDispatch);

  const [{ username, email }, onChange, reset] = useInput({
    username: "",
    email: "",
  });

  const onCreate = () => {
    nextId.current += 1;

    const newUser = {
      id: nextId.current,
      username,
      email,
    };
    dispatch({
      type: "CREATE_USER",
      newUser,
    });
  };

  return (
    <div className="createUser">
      <input
        name="username"
        type="text"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      ></input>
      <input
        name="email"
        type="text"
        placeholder="메일명"
        onChange={onChange}
        value={email}
      ></input>
      <b>
        {username} ({email}) ({nextId.current})
      </b>
      <button onClick={onCreate}>Create</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
