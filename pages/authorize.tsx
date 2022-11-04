import type { NextPage } from "next";
import { useState, useEffect } from "react";
import axios from "axios";

const Authorize: NextPage = () => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:5000/account/authorize",
      headers: {
        accept: "application/json",
      },
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

export default Authorize;
