import { useNavigate, Link } from "react-router-dom";
var Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const handleLogin = () => {
    onLogin();
    navigate("/");
  };
  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        Email: <input type="email" id="email" required />
        <br /> <br />
        Password: <input type="password" id="password" required />
        <br />
        <br />
        <button type="submit">Login</button>
        <p>Create an account? <Link to="/signup">Sign Up</Link></p>
      </form>
    </section>
  );
};
export default Login;