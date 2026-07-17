import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup(e) {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://blogsphere-5590.onrender.com/auth/signup",
        {
          name,
          email,
          password,
        }
      );

      alert(res.data.message);

      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Signup Failed");
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-black">
      <form
        onSubmit={handleSignup}
        className="bg-gray-900 p-10 rounded-2xl w-96 shadow-xl"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Signup
        </h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 rounded bg-gray-800 text-white mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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

        <button className="w-full bg-green-600 hover:bg-green-700 p-3 rounded font-bold">
          Signup
        </button>

        <p className="text-gray-400 mt-6 text-center">
          Already have an account?{" "}
          <Link
            to="/"
            className="text-cyan-400"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;