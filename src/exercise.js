import { Component } from "react";

function Hello123() {
  const user = {
    username: "junseok",
    email: "newtonjjang@naveromc",
  };
  return (
    <ErrorChecking>
      <User />
    </ErrorChecking>
  );
}

export default Hello123;

function User({ user }) {
  const { username, email } = user;
  return (
    <div>
      <h1>username: {username}</h1>
      <h3>email: {email}</h3>
    </div>
  );
}

class ErrorChecking extends Component {
  state = {
    error: false,
    errorName: null,
  };
  componentDidCatch(error, info) {
    console.log("error checking");
    console.log(error, info);
    this.setState({ error: true, errorName: info });
  }
  render() {
    return <div>{this.state.error ? "에러발생!!!" : null}</div>;
  }
}
