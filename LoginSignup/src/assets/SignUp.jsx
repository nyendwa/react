import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom'; // Make sure you have react-router-dom installed

function SignUp() {
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Registration details:', { fullName, username, email, password });
        // Add form submission logic here
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <h1 className="signup-title">Create Account</h1>
                <form onSubmit={handleSubmit} className="signup-form">
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        className="signup-input"
                    />
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="signup-input"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="signup-input"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="signup-input"
                    />
                    <button type="submit" className="signup-button">Sign Up</button>
                    <p className="login-link">
                        Have an account?{' '}
                        <Link to="/" className="login-link-a">
                            Log in
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
