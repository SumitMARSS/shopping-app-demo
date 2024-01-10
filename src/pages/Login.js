// Login.js
import React, { useContext, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import toast from "react-hot-toast";
import Spinner from "./Spinner";
import { AppContext } from "../context/AppContext";
import { FaLinkedin } from "react-icons/fa";

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {loading, setLoading} = useContext(AppContext);

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setLoading(true);
      const success = await login(username, password);
      setLoading(false);
      console.log("In login page", success);
      // Redirect or perform any action upon successful login if info is right
      if (success) {
        toast.success("Login Successfully");
        console.log("Login successful");
        navigate("/Home");
      } 
      else {
        toast.error("Sorry, Please Enter Correct Info");
      }
    } catch (err) {
      console.log("Error in login", err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-page">
        <div className="login-spinner">{loading && <Spinner />}</div>

        <h2>Login Page</h2>

        <label htmlFor="user"> Username: </label>
        <input
          type="text"
          placeholder="Enter Your Username:"
          value={username}
          id="user"
          autoComplete="on"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="pass"> Password: </label>
        <input
          type="password"
          placeholder="Enter Your Password:"
          value={password}
          id="pass"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
      </div>

      {/* login Ingo */}

      <div className="display">
        <div>
          <span>Use Me For Authentication Purposes : </span>
        </div>
        <div className="auth">
          <p>
            <span>Username: </span>kminchelle
          </p>
          <p>
            <span>Password: </span> 0lelplR
          </p>
        </div>
        <div className="linkin-link">
          <span>Dev: </span>
          <a href="https://www.linkedin.com/in/sumit-kumar-975b37220/" target="_blank"> Sumit Kumar <FaLinkedin /> </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
