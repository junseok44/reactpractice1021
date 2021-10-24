/*

const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value, // 여기서 name: value 이렇게 쓰면 그냥 name이 되겠지만.. name변수의 값을 쓰려고 하면 [name]해야 겠죠.
    });
  };

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
  

  const onRemove = useCallback((id) => {
    setUsers((users) => {
      users.filter((user) => user.id !== id);
    });
  }, []);

  // 여기서 dependencies를 텅빈채로 써주는 이유는, 이게 없으면 계속 리렌더링될테니까
  // callback을 쓰는 이유는 결국에는 특정 경우에만 이게 새롭게 만들어질 수 있도록 하는것인데.

  const onToggle = useCallback((id) => {
    setUsers((users) =>
      users.filter((user) =>
        user.id === id ? { ...user, active: !user.active } : { ...user }
      )
    );
  }, []);

  // 얘는 그냥 다른거 바뀔때마다 이 onToggle도 새롭게 만들어지는 것이다.
  /*
  const onToggle = (id) => {
    setUsers(
      users.map(
        (user) => (user.id === id ? { ...user, active: !user.active } : user) //  여기서는 user 객체를 반환하는거죠.
      )
    );
  };
  */

/*
  아래 방식의 경우 users array가 바뀔때마다, 이 callback 함수도 새롭게 만들어진다.
  그런데 이 callback 함수는 그냥 사용하고 싶으므로, 최적화를 위해서 dependencies를 없애주고, 
  대신 setUsers에서 함수형 업데이트를 해주면 users를 parameter로 받기 때문에 
  users가 변화되어서 함수가 다시 렌더링 되지 않더라도 언제나 최신의 users를 가져올 수 있다.
  */

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
  

  const countActiveUsers = (users) => {
    const activeArray = users.filter((user) => user.active);
    return activeArray.length;
  };

  
  users가 바뀔때만 countActiveUsers의 값을 바꾸고 그렇지 않을때는
  그냥 countActiveUsers의 값을 사용하겠습니다. 이런 의미입니다.

  여기서 왜 함수를 중괄호로 감싸면 countActiveUsers가 실행되지를 않지?
  
  
  const count = useMemo(() => countActiveUsers(users), [users]);

  */
