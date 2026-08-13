import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
var Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    onLogin();
    const res = await axios.post("https://kprcas-backend.onrender.com/login", {
      email: email,
      password: password,
    });
    console.log(res.data);
    if(res.data.isLoggedIn){
      console.log(res.data)
      alert(res.data.message);
      navigate("/");
    }
    else{
      console.log(res.data.message)
      alert(res.data.message);
    }
  };
  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        Email:{" "}
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /> <br />
        Password:{" "}
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <br />
        <button type="submit">Login</button>
        <p>
          Create an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </section>
  );
};
export default Login;
