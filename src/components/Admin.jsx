import React, { useState, useEffect } from "react";
import AdminPanel from "./AdminPanel";
import "./Admin.css";

const STORAGE_KEY = "pharmacare_isAdmin";

// Admin Login Form
function AdminLogin({ onLogin, onBack }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "admin@example.com" && password === "password") {
            localStorage.setItem(STORAGE_KEY, "true");
            onLogin();
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <button className="back-btn" onClick={onBack}>⬅ Back</button>
                <h2>Admin Login</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <input
                        type="email"
                        placeholder="Admin Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Admin Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

// Admin Wrapper Component
export default function AdminWrapper({ onLogout, onLoginBack }) {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const val = localStorage.getItem(STORAGE_KEY);
        if (val === "true") setIsAdmin(true);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem(STORAGE_KEY);
        setIsAdmin(false);
        if (onLogout) onLogout();
    };

    const handleLoginSuccess = () => {
        setIsAdmin(true);
    };

    const handleBackToHome = () => {
        if (!isAdmin && onLoginBack) {
            onLoginBack(); // Go back to home
        }
    };

    return (
        <div className="admin-wrapper">
            {!isAdmin ? (
                <AdminLogin onLogin={handleLoginSuccess} onBack={handleBackToHome} />
            ) : (
                <AdminPanel onLogout={handleLogout} />
            )}
        </div>
    );
}
