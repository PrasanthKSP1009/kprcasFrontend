import {Link} from "react-router-dom";
const Signup = () => {
    return (
        <div>
            <h1>Signup Page</h1>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
                <br /><br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <br /><br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <br /> <br />
                <button type="submit">Sign Up</button>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>
    );
}
export default Signup;