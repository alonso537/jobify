import { useEffect, useState } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  //global state and useNavigate
  const navigate = useNavigate();
  const { user, isLoading, showAlert, displayAlert, setupUser } =
    useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(import.meta.env.VITE_APP_BACK_URL);

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    const currentUser = {
      name,
      email,
      password,
    };
    if (isMember) {
      setupUser({
        currentUser,
        endpoint: "login",
        alertText: "Login successful! Redirecting...",
      });
    } else {
      setupUser({
        currentUser,
        endpoint: "register",
        alertText: "User registered successfully! Redirecting...",
      });
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"} </h3>
        {showAlert && <Alert />}

        {!values.isMember && (
          <FormRow
            labelText="Name"
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}

        <FormRow
          labelText="Email"
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />

        <FormRow
          labelText="Password"
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          submit
        </button>
        <p>
          {values.isMember
            ? "Don't have an account?"
            : "Already have an account?"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {" "}
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
