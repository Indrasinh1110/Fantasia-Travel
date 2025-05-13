import React, { useState } from 'react';
import './Auth.css';

const Login = ({ onClose, onSwitchToSignup }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Add your login logic here
        alert(`Logging in with Email: ${email} and Password: ${password}`);
    };

    return (
        <div className="auth-card">
            <button className="auth-close-btn" onClick={onClose} aria-label="Close">&times;</button>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />

                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                />

                <button type="submit" className="btn">Login</button>
            </form>
            <p>
                Don't have an account?{' '}
                <button
                    className="btn-link"
                    type="button"
                    onClick={onSwitchToSignup}
                >
                    Sign up
                </button>
            </p>
        </div>
    );
};

export default Login;
