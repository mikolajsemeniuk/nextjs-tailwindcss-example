import type { NextPage } from "next";
import { useState } from "react";

interface Input {
  email: string;
  password: string;
}

const Login: NextPage = () => {
  const [input, setInput] = useState<Input>({
    email: "",
    password: "",
  });

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput({
      ...input,
      email: e.target.value,
    });
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput({
      ...input,
      password: e.target.value,
    });
  };

  const onClickLogin = (e: React.MouseEvent<HTMLButtonElement>): void => {
    alert(`email: ${input.email}, password: ${input.password}`);
    e.preventDefault();
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <section className="flex flex-[5] md:flex-[1] flex-col bg-orange-400 items-center justify-center">
        <h2>Login</h2>
        <input
          value={input.email}
          onChange={onChangeEmail}
          type="email"
          className="rounded-xl m-1"
        />
        <input
          value={input.password}
          onChange={onChangePassword}
          type="password"
          className="rounded-xl m-1"
        />
        <button onClick={onClickLogin} className="bg-blue-300 px-12 rounded-md">
          login
        </button>
      </section>
      <aside className="bg-red-400 flex-[1] md:flex-[2]"></aside>
    </div>
  );
};

export default Login;
