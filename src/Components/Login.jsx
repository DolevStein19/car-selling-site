import React, { useContext, useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom';
import { carData } from '../App';


export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const {correctPassword,correctUsername} = useContext(carData)


    const handleLogin = () => {
        if (username === correctUsername && password === correctPassword) {
            navigate('/home')
        } else {
            setError('Invalid username or password');
        }
        setUsername('');
        setPassword('');
    };

    return (
        <div id='main'>
            <div className='login-container'>
                <h2>Login</h2>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <button onClick={handleLogin}>Login</button>
            </div>




        {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}

        <section id='section'>
            <div class='air air1'></div>
            <div class='air air2'></div>
            <div class='air air3'></div>
            <div class='air air4'></div>
        </section>


        {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}


        </div>
    );
};




