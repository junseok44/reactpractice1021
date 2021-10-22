// 이해가 잘 안되는것은. onCreate눌렀을때 input state의 username과 email이 초기화되면서 input value도 초깃값으로 돌아가는것같은데 왜?
// props 부분에서 {} 이것도 개념 제대로 잡기. context를 활용할 수는 없나?
// 렌더링의 개념을 제대로 파악하기.

import React, { useCallback, useMemo, useRef, useState } from "react";
import { CreateUser } from "./CreateUser";
import { UserList } from "./UserList";

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
      [name]: value, // 여기서 name: value 이렇게 쓰면 그냥 name이 되겠지만.. name변수의 값을 쓰려고 하면 [name]해야 겠죠.
    });
  };

  const nextId = useRef(3);

  const onCreate = useCallback(() => {
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
  }, [users, email, username]);

  const onRemove = (deleteId) => {
    const updatedUsers = users.filter((user) => user.id !== deleteId);
    setUsers(updatedUsers);
    nextId.current -= 1;
  };

  const onToggle = (id) => {
    setUsers(
      users.map(
        (user) => (user.id === id ? { ...user, active: !user.active } : user) //  여기서는 user 객체를 반환하는거죠.
      )
    );
  };

  /*
  const onToggle = useCallback(
    id => {
      setUsers(
        users.map(user =>
          user.id === id ? { ...user, active: !user.active } : user
        )
      );
    },
    [users]
  );
  */

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ]);

  const countActiveUsers = (users) => {
    const activeArray = users.filter((user) => user.active);
    return activeArray.length;
  };

  // 여기서 왜 함수를 중괄호로 감싸면 countActiveUsers가 실행되지를 않지?
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <div>
      <UserList
        users={users}
        onRemove={onRemove}
        onToggle={onToggle}
        hello123="thisis"
      ></UserList>
      <CreateUser
        onCreate={onCreate}
        onChange={onChange}
        username={username}
        email={email}
        onReset={onReset}
        nextId={nextId}
      ></CreateUser>
      <div>현재 활성화 : {count}</div>
    </div>
  );
}
export default App;
