import React, { useState } from 'react';
import './LoginUser.css';

function LoginUser() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt with:', { email, password });
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h3 className="login-title">Login to Your Account</h3>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="input-container">
                        <div className="form-group">
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                required
                                className="login-input"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                required
                                className="login-input"
                            />
                        </div>
                    </div>
                    <button type="submit" className="login-button">
                        Log In
                    </button>
                    <p className="signup-link">
                        Don't have an account?{" "}
                        <a href="/register" className="signup-link-a">
                            Sign up
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default LoginUser;