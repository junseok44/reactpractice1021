import React, { useEffect } from "react";

export function UserList({ users, onRemove, hello123, onToggle }) {
  return (
    <Users
      users={users}
      onRemove={onRemove}
      hello={hello123}
      onToggle={onToggle}
    ></Users>
  );
}

// {users onRemove}

const Users = React.memo(function Users({ users, onRemove, hello, onToggle }) {
  useEffect(() => {
    console.log("컴포넌트가 마운트됨");
    return () => console.log("컴포넌트가 언마운트됨");
  }, [users]);

  return users.map((user) => {
    return (
      <div key={user.id}>
        <h3
          style={{ cursor: "pointer", color: user.active ? "green" : "black" }}
        >
          {user.username} ({user.id})
        </h3>
        <p>{user.email}</p>
        <button
          onClick={() => {
            onRemove(user.id);
          }}
        >
          delete
        </button>
        <button
          onClick={() => {
            onToggle(user.id);
          }}
        >
          onToggle
        </button>
      </div>
    );
  });
});
