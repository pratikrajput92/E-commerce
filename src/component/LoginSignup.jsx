import axios from 'axios';
import React, { use, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function LoginSignup() {

     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");
     const [error, setError] = useState("");
     const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please enter email and password");
      return;
    }
    try {
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username,
        password
      });
      localStorage.setItem("token", response.data.token);

      navigate("/");
    } catch (error) {
      setError("Sahi likh be!!");
      console.error("Login Error:", error);
      
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full p-2 mb-3 border rounded"/>
        <input type="password" placeholder="Password"value={password} onChange={(e) => setPassword(e.target.value)}className="w-full p-2 mb-4 border rounded"/>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginSignup