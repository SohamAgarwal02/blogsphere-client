import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://blogsphere-5590.onrender.com/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", res.data.token);

      alert("Login Successful ✅");

      navigate("/home");
    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-black">
      <form
        onSubmit={handleLogin}
        className="bg-gray-900 p-10 rounded-2xl w-96 shadow-xl"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded bg-gray-800 text-white mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded bg-gray-800 text-white mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-cyan-500 hover:bg-cyan-600 p-3 rounded font-bold">
          Login
        </button>

        <p className="text-gray-400 mt-6 text-center">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-cyan-400"
          >
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;