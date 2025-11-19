import React, { useState } from 'react';
import './css/login.css';

export default function Login() {
    const [email, setEmail] = useState('admin123@gmail.com');
    const [password, setPassword] = useState('password');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleMouseOver = (e) => {
        e.currentTarget.style.backgroundColor = '#3a5a80';
    };

    const handleMouseOut = (e) => {
        e.currentTarget.style.backgroundColor = '#4a6fa5';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const response = await fetch("http://localhost:8000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    email: email.trim(),
                    password: password
                })
            });

            const data = await response.json();
            
            console.log("Login exitoso:", data);
           
        } catch (err) {
            console.error("Error en login:", err);
            setError(err.message || 'Error al iniciar sesión. Por favor, inténtalo de nuevo.');
        } 
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-box">
                <h2 className="login-title">Iniciar Sesión</h2>

                {error && (
                    <div className="error-message" style={{ color: 'red', marginBottom: '1rem' }}>
                        {error}
                    </div>
                )}

                <div className="input-group">
                    <label htmlFor="email" className="input-label">
                        Correo electrónico
                    </label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        id="email"
                        placeholder="Ingresa tu correo"
                        className="input-field"
                        required
                        disabled={isLoading}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="password" className="input-label">
                        Contraseña
                    </label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        id="password"
                        placeholder="Ingresa tu contraseña"
                        className="input-field"
                        required
                        minLength="6"
                        disabled={isLoading}
                    />
                </div>

                <button
                    type="submit"
                    className="login-button"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    disabled={isLoading}
                >
                    {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                </button>

                <a href="#" className="forgot-password">
                    ¿Olvidaste tu contraseña?
                </a>
            </form>
        </div>
    );
}