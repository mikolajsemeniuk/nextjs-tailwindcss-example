import type { NextPage } from "next";

const Login: NextPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <section className="flex flex-[5] md:flex-[1] flex-col bg-orange-400 items-center justify-center">
        <h2>Login</h2>
        <input type="email" className="rounded-xl m-1" />
        <input type="password" className="rounded-xl m-1" />
        <button className="bg-blue-300 px-12 rounded-md">login</button>
      </section>
      <aside className="bg-red-400 flex-[1] md:flex-[2]"></aside>
    </div>
  );
};

export default Login;
