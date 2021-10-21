// 이해가 잘 안되는것은. onCreate눌렀을때 input state의 username과 email이 초기화되면서 input value도 초깃값으로 돌아가는것같은데 왜?
// props 부분에서 {} 이것도 개념 제대로 잡기. context를 활용할 수는 없나?

import { UserList } from "./UserList";
import { useRef, useState } from "react";
import { CreateUser } from "./CreateUser";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const nameInput = useRef();

  const { username, email } = inputs;

  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
    nameInput.current.focus();
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const nextId = useRef(3);

  const onCreate = () => {
    nextId.current += 1;

    const newUser = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, newUser]);

    setInputs({
      username: "",
      email: "",
    });
  };

  const onRemove = (deleteId) => {
    const updatedUsers = users.filter((user) => user.id !== deleteId);
    setUsers(updatedUsers);
    nextId.current -= 1;
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
    },
  ]);

  return (
    <div>
      <UserList users={users} onRemove={onRemove}></UserList>
      <CreateUser
        onCreate={onCreate}
        onChange={onChange}
        username={username}
        email={email}
        onReset={onReset}
        nextId={nextId}
      ></CreateUser>
    </div>
  );
}
export default App;
