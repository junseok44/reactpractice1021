// 렌더링의 개념을 제대로 파악하기.

import React, { useMemo, useReducer, useRef } from "react";
import { CreateUser } from "./CreateUser";
import { UserList } from "./UserList";
import useInput from "./useInput";
import "./App.css";
import produce from "immer";

const countActiveUsers = (users) => {
  return users.filter((user) => user.active === true).length;
};

const initialState = {
  users: [
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
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_USER":
      return produce(state, (draft) => {
        draft.initialState = initialState;
        draft.users.push(action.newUser);
      });
    /*
        inputs: initialState.inputs,
        users: state.users.concat(action.newUser),
        */
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      return state;
  }
}

export const UserDispatch = React.createContext(null);

export const InputContext = React.createContext(useInput);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(3);
  const { users } = state;

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <div className="container">
      <UserDispatch.Provider value={[dispatch, nextId]}>
        <InputContext.Provider value={useInput}>
          <CreateUser nextId={nextId}></CreateUser>
        </InputContext.Provider>
        <UserList users={users} nextId={nextId}></UserList>
        <div className="count">현재 활성화된 인원 수 : {count}</div>
      </UserDispatch.Provider>
    </div>
  );
}

export default App;
