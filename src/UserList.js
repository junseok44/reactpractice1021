export function UserList({ users, onRemove }) {
  return <Users users={users} onRemove={onRemove}></Users>;
}

function Users({ users, onRemove }) {
  return users.map((user) => {
    return (
      <div key={user.id}>
        <h3>
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
      </div>
    );
  });
}
