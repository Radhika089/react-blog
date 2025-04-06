import React, { useState } from "react";

const LoginModal = ({ setShowLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
    alert(`Logged in as ${email}`);
    setShowLogin(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 mt-28">
      <div className="bg-white text-black p-6 rounded-md w-80 shadow-lg">
        <h1 className="text-xl font-semibold mb-4">Log In</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <div className="flex justify-end gap-4">
          <button
            onClick={() => setShowLogin(false)}
            className="text-gray-500 hover:text-red-500"
          >
            Cancel
          </button>
          <button
            onClick={handleLogin}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
