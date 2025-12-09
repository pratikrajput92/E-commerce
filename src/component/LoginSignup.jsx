import axios from 'axios';
import React, { use, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function LoginSignup() {

  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please enter username and password");
      return;
    }
    try {
      if(isSignup){

        // Signup ke liye API: 
        const response = await axios.post("http://localhost:5000/api/auth/signup", {
          username,
          password
        });
        alert("Signup Successful! Now login.");
        setIsSignup(false);
        return;
      }

      // Login ke liye API:
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password
      });
      localStorage.setItem("token", response.data.token);

      navigate("/");
    } catch (error) {
      setError(error.response?.data?.message || "Sahi likh be!!");
      console.error("Login Error:", error); 
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">

      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-lg w-80">

        <h2 className="text-2xl font-semibold mb-4 text-center">
          {isSignup ? "Create Account" : "Login"}
        </h2>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <input type="text" placeholder="Username"
          value={username} onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
        />

        <input type="password" placeholder="Password"
          value={password} onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          {isSignup ? "Signup" : "Login"}
        </button>

        {/* 🔥 Toggle Button */}
        <p className="text-center text-sm mt-4 cursor-pointer text-blue-600"
          onClick={() => { setIsSignup(!isSignup); setError(""); }}
        >
          {isSignup ? "Already have an account? Login" : "Don't have an account? Signup"}
        </p>

      </form>

    </div>
  );
}

export default LoginSignup