import React, { useEffect, useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;

let firstRender = true;
const UserProfile = () => {
  const [user, setUser] = useState();

  const refreshToken = async () => {
    const response = await axios
      .get("http://localhost:8080/api/refresh", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));
    const data = await response.data;
    return data;
  };

  const sendRequest = async () => {
    const response = await axios
      .get("http://localhost:8080/api/profile", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));
    const data = await response.data;

    return data;
  };

  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      sendRequest().then((data) => setUser(data.user));
    }
    let interval = setInterval(() => {
      refreshToken().then((data) => setUser(data.user));
    }, 1000 * 29);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div>{user && <h1>{user.username}</h1>}</div>;
    </>
  );
};

export default UserProfile;
