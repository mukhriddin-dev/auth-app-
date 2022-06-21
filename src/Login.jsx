import React, { useContext } from "react";
import context from "./context/context";

const Login = () => {
  const {
    info: { password, username, setPassword, setUsername, setIsLogged, isLogged },
  } = useContext(context);

  console.log(password, username);
  const log = {
    usernam: "admin",
    parol: "1234",
  };

  const logins = () => {
    setIsLogged(log.usernam===username && log.parol===password);
    console.log(isLogged);
  };

  return (
    <div className="login card p-4 w-50 mx-auto mt-5">
      <input
        type="text"
        className="form-control w-50 p-2 m-1 mx-auto "
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="form-control w-50 p-2 m-1 mx-auto "
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="btn btn-success w-25 mx-auto mt-3" onClick={()=>logins()}>LOGIN</button>
    </div>
  );
};

export default Login;
