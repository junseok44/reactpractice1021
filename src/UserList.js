// 문제가 하나 있다. 1,2,3,4 까지 만들어주고. 1을 지워버리면. enxtId는 3이되는데. 이때 다시 만들면
// 그 다음으로 만들어지는것도 4가 된다. 이것을 어떻게 해결해야할것인가/

import React, { useContext, useEffect } from "react";
import { UserDispatch } from "./App";

export function UserList({ users }) {
  return <Users users={users}></Users>;
}

// {users onDelete}

const Users = React.memo(function Users({ users }) {
  useEffect(() => {
    console.log("컴포넌트가 마운트됨");
    return () => console.log("컴포넌트가 언마운트됨");
  }, [users]);

  const [dispatch, nextId] = useContext(UserDispatch);

  return users.map((user) => {
    return (
      <div key={user.id} className="user">
        <h3
          style={{ cursor: "pointer", color: user.active ? "green" : "black" }}
        >
          {user.username} ({user.id})
        </h3>
        <p>{user.email}</p>
        <button
          onClick={() => {
            nextId.current -= 1;
            dispatch({
              type: "DELETE_USER",
              id: user.id,
            });
          }}
        >
          delete
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "TOGGLE_USER",
              id: user.id,
            });
          }}
        >
          onToggle
        </button>
      </div>
    );
  });
});
