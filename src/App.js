import { useState } from "react";
import "./App.css";
import FormDetails from "./components/FormDetails";

function App() {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    alert("You-re signed in!");
  };

  const onChange = (e) => {
    // console.log(e.target);

    // if (e.target.name === "username") {
    // console.log(formValues.username);
    // console.log(e.target);
    console.log(e.target.value);
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      required: true,
      min: "3",
      max: "25",
      pattern: `^[A-Za-z0-9]{3,25}`,
      // id: "username",
      name: "username",
      placeholder: "Enter username",
      label: "Username",
      errorMessage: "Length of username should be between 3 and 25 characters",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      required: true,
      // id: "email",
      name: "email",
      placeholder: "Enter email",
      label: "Email",
      errorMessage: "Email cannot be blank!",
    },
    {
      id: 3,
      name: "password",
      type: "password",
      required: true,
      // id: "password",
      // pattern: `/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(!@#$%^&*).{8,25}$/`,
      pattern: `^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$`,
      name: "password",
      placeholder: "Enter password",
      label: "Password",
      errorMessage:
        "Password should have at 8 characters and at least 1 number, 1 Uppercase character, 1 lowercase character, and 1 special character (!@#$%^&*)",
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      required: true,
      // id: "confirmPassword",
      pattern: formValues.password,
      name: "confirmPassword",
      placeholder: "Confirm Password",
      label: "Password",
      errorMessage: "Passwords do not match!",
    },
  ];

  // console.log(formValues);
  return (
    <div className="main-container">
      <div className="container">
        <div className="heading">Sign Up</div>

        <div className="form-container">
          <form className="form" id="form" onSubmit={submitForm}>
            {inputs.map((input) => (
              <FormDetails
                key={input.id}
                {...input}
                value={formValues[input.name]}
                onChange={onChange}
              />
            ))}

            <div className="ele ele-btn">
              <input type="submit" value="SIGN UP" id="btn"></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
