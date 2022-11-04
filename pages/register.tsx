import type { NextPage } from "next";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

interface Input {
  company: string;
  email: string;
  password: string;
}

const Register: NextPage = () => {
  const router = useRouter();
  const [input, setInput] = useState<Input>({
    company: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");

  const onChangeCompany = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput({
      ...input,
      company: e.target.value,
    });
    setError("");
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput({
      ...input,
      email: e.target.value,
    });
    setError("");
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput({
      ...input,
      password: e.target.value,
    });
    setError("");
  };

  const onClickLogin = async (
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    if (input.company.length < 2 || input.company.length > 30) {
      setError("Company must be between 2 and 30 characters");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (input.password.length < 4 || input.password.length > 30) {
      setError("Password must be between 4 and 30 characters");
      return;
    }

    await axios({
      method: "post",
      url: "http://localhost:5000/account/register",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: {
        company: input.company,
        email: input.email,
        password: input.password,
      },
      withCredentials: true,
    })
      .then((response) => {
        console.log(response);
        e.preventDefault();
        router.push("/authorize");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <section className="flex flex-[5] md:flex-[1] flex-col items-center justify-center">
        <div className="flex flex-col">
          <label className="text-red-600">{error}</label>
          <input
            value={input.company}
            onChange={onChangeCompany}
            type="text"
            className="my-4 border-b-2 border-slate-200"
            placeholder="Company"
          />
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

export default Register;
