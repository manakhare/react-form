import React from "react";

export const data = [
  {
    id: 1,
    name: "username",
    type: "text",
    id: "username",
    name: "username",
    placeholder: "Enter username",
    label: "Username",
    errorMessage: "Length of username should be between 3 and 25 characters",
  },
  {
    id: 2,
    name: "email",
    type: "email",
    id: "email",
    name: "email",
    placeholder: "Enter email",
    label: "Email",
    errorMessage: "",
  },
  {
    id: 3,
    name: "password",
    type: "password",
    id: "password",
    name: "password",
    placeholder: "Enter password",
    label: "Password",
    errorMessage:
      "Password should have at least 1 Uppercase character, 1 lowercase character, and 1 special character (!@#$%^&*)",
  },
  {
    id: 4,
    name: "confirmPassword",
    type: "password",
    id: "confirmPassword",
    name: "confirmPassword",
    placeholder: "Enter confirmPassword",
    label: "Password",
    errorMessage: "Passwords do not match!",
  },
];
