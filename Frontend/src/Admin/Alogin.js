import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../Components/NavBar';
import backgroundImage from './pexels-life-of-pix-8247.jpg'; // Adjust the path to your background image

const Alogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { email, password };
    axios.post("http://localhost:8000/alogin", payload)
      .then(result => {
        console.log(result);
        if (result.data.Status === "Success") {
          navigate("/ahome");
          alert('Login successful');
        } else {
          alert("Login failed");
        }
      })
      .catch(err => {
        console.log(err);
        alert("Login failed");
      });
  };

  const formHandle1 = (e) => {
    e.preventDefault();
    navigate("/asignup");
  };

  return (
    <div style={{ 
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: 'cover', 
      minHeight: '100vh', 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)' /* Adjust the opacity as needed */
    }}>
      <NavBar style={{ alignSelf: 'flex-start', marginTop: '20px' }} />
      <div className="max-w-md w-full space-y-8" style={{ padding: "30px", backgroundColor: "lightblue", borderRadius: "25px", marginTop: "20px" }}>
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Admin Login
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              onClick={handleSubmit}
              className="bg-dark group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white"
            >
              Log in
            </button>
            <br />
            <p>Don't have an account? Create one
              <button
                onClick={formHandle1}
                className="bg-dark group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white"
              >
                Signup
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Alogin;
