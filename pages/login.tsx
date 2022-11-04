import type { NextPage } from "next";
import { useState } from "react";
import axios from "axios";

interface Input {
  email: string;
  password: string;
  error: string;
}

const Login: NextPage = () => {
  const [input, setInput] = useState<Input>({
    email: "",
    password: "",
    error: "",
  });

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput({
      ...input,
      email: e.target.value,
      error: "",
    });
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput({
      ...input,
      password: e.target.value,
      error: "",
    });
  };

  const onClickLogin = async (
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
      setInput({
        ...input,
        error: "Please enter a valid email address",
      });
      return;
    }

    if (input.password.length < 4 || input.password.length > 30) {
      setInput({
        ...input,
        error: "password must be between 4 and 30 characters",
      });
      return;
    }

    await axios({
      method: "post",
      url: "http://localhost:5000/account/login",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: {
        email: input.email,
        password: input.password,
      },
      withCredentials: true,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    alert(`email: ${input.email}, password: ${input.password}`);

    e.preventDefault();
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <section className="flex flex-[5] md:flex-[1] flex-col items-center justify-center">
        <div className="flex flex-col">
          <label className="text-red-600">{input.error}</label>
          <input
            value={input.email}
            onChange={onChangeEmail}
            type="email"
            className="my-4 border-b-2 border-slate-200"
            placeholder="Email"
          />
          <input
            value={input.password}
            onChange={onChangePassword}
            type="password"
            className="my-4 border-b-2 border-slate-200"
            placeholder="Password"
          />
          <div>
            <button onClick={onClickLogin} className="font-bold my-2">
              Sign in
            </button>
          </div>
        </div>
      </section>
      <aside className="bg-orange-100 flex-[1] md:flex-[2]"></aside>
    </div>
  );
};

export default Login;
