import React from "react";

export default function Login() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
        gap: "20px",
        color: "black"
      }}
    >
      <h1>Login to Account</h1>
      <input type="text" placeholder="Your Email" />
      <input type="password" placeholder="Your password" />

      <button>Submit</button>
    </div>
  );
}
