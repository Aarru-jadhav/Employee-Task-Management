import React, { useState } from 'react';

const Login = ({ handlelogin }) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const handlesubmit = (e) => {
    e.preventDefault();
    handlelogin(email, password);
    setemail('');
    setpassword('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-8 tracking-wide">Log In</h1>
        <form
          className="w-full flex flex-col gap-6"
          onSubmit={handlesubmit}
        >
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            type="email"
            placeholder="User Email"
          />

          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            type="password"
            placeholder="Password"
          />

          <button
            className="bg-purple-600 text-white font-bold py-3 rounded-lg shadow-md hover:bg-purple-700 transition-all"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
