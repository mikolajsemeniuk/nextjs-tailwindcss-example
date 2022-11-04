import type { NextPage } from "next";
import { useState, useEffect } from "react";
import axios from "axios";

const Logout: NextPage = () => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:5000/account/logout",
      withCredentials: true,
    })
      .then((response) => {
        setMessage(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return <div>message: {message}</div>;
};

export default Logout;
