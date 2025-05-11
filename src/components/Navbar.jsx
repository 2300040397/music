import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(true);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // ✅ Unified authentication logic with backend
  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isSignup ? "/signup" : "/login";

    try {
      const res = await fetch(`http://localhost:8080/api/auth${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const msg = await res.text();
      alert(msg);

      if (!isSignup && msg === "Login success") {
        setUser({ email });
        setIsModalOpen(false);
        setEmail('');
        setPassword('');
      } else if (isSignup && msg === "Signup successful") {
        setIsSignup(false);
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      console.error("Authentication failed:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      {/* Top Navigation */}
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt="Back"
          />
          <img
            onClick={() => navigate(+1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt="Forward"
          />
        </div>

        <div className="flex items-center gap-4">
          <p
            className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer"
            onClick={() => navigate('/premium')}
          >
            Explore Premium
          </p>
          <p
            className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer"
            onClick={() => navigate('/install')}
          >
            Install App
          </p>
          {user ? (
            <div
              className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer"
              onClick={handleLogout}
              title="Click to logout"
            >
              {user.email.charAt(0).toUpperCase()}
            </div>
          ) : (
            <button
              className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center"
              onClick={() => setIsModalOpen(true)}
              title="Login / Signup"
            >
              ?
            </button>
          )}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 mt-4">
        <p
          className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer"
          onClick={() => navigate('/all')}
        >
          All
        </p>
        <p
          className="bg-black px-4 py-1 rounded-2xl cursor-pointer"
          onClick={() => navigate('/music')}
        >
          Music
        </p>
        <p
          className="bg-black px-4 py-1 rounded-2xl cursor-pointer"
          onClick={() => navigate('/podcasts')}
        >
          Podcasts
        </p>
      </div>

      {/* Modal for Signup/Login */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-[300px] relative">
            <button
              className="absolute top-2 right-3 text-xl font-bold"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4 text-center">
              {isSignup ? 'Sign Up' : 'Login'}
            </h2>
            <form onSubmit={handleAuthSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 rounded"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 rounded"
                required
              />
              <button
                type="submit"
                className="bg-purple-500 text-white py-2 rounded"
              >
                {isSignup ? 'Sign Up' : 'Login'}
              </button>
            </form>
            <p
              className="mt-3 text-sm text-blue-600 cursor-pointer text-center"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup
                ? 'Already have an account? Login'
                : "Don't have an account? Sign Up"}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
