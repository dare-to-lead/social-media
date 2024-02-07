import React from "react";

const ProfilePosts = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {[1, 2, 3, 4, 3, 23, 33, 3, 33, 3, 3, 33, 3, 33].map((p) => (
        <img
          style={{ width: "200px", maxHeight: "300px", borderRadius: "3px" }}
          src="https://plus.unsplash.com/premium_photo-1665657351435-96c58da04fd1?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      ))}
    </div>
  );
};

export default ProfilePosts;
