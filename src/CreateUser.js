export function CreateUser({ username, onChange, onCreate, email, nextId }) {
  return (
    <div>
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
    </div>
  );
}
