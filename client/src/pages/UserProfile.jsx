import React, { useEffect, useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
const UserProfile = () => {
  const [user, setUser] = useState();

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
    sendRequest().then((data) => setUser(data.user));
  }, []);
  return (
    <>
      <p>{user.username}</p>
    </>
  );
};

export default UserProfile;
