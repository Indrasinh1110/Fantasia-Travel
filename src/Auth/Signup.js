import React, { useState } from 'react';
import './Auth.css';

const Signup = ({ onClose, onSwitchToLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        // Add your signup logic here
        alert(`Signing up with Email: ${email}`);
    };

    return (
        <div className="auth-card">
            <button className="auth-close-btn" onClick={onClose} aria-label="Close">&times;</button>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
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

                <label>Confirm Password</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                    required
                />

                <button type="submit" className="btn">Sign Up</button>
            </form>
            <p>
                Already have an account?{' '}
                <button
                    className="btn-link"
                    type="button"
                    onClick={onSwitchToLogin}
                >
                    Login
                </button>
            </p>
        </div>
    );
};

export default Signup;
