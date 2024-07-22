import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../Components/NavBar';

const Asignup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = { name, email, password };
        
        try {
            await axios.post("http://localhost:8000/aregister", payload);
            navigate("/alogin");
            alert("Account Created Successfully")
        } catch (err) {
            console.error(err);
            alert("Failed to create account");
        }
    };

    return (
        <div>
            <NavBar />
            <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8" style={{ padding: "30px", backgroundColor: "lightgreen", borderRadius: "25px", marginTop: "20px" }}>
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Admin Register
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <input
                                name="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div>
                            <input
                                name="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Email address"
                                required
                            />
                        </div>
                        <div>
                            <input
                                name="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Password"
                                required
                            />
                        </div>
                        <div>
                            <button type="submit" className="bg-dark group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white">
                                Signup
                            </button>
                            <br />
                            <p>
                                Already have an account?{" "}
                                <button
                                    onClick={() => navigate("/alogin")}
                                    className="bg-dark group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white"
                                >
                                    Login
                                </button>
                            </p>
                            <br />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Asignup;
