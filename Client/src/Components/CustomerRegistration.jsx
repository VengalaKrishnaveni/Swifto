/* CustomerRegistration.js */
import React, { useState } from 'react';
import Axios from 'axios';
import '../assets/CustomerRegistration.css';

const CustomerRegistration = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');

    const createUser = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        Axios.post('http://localhost:3001/signup', {
            username: username,
            password: password,
            name: name,
        })
            .then(() => {
                alert('User added');
            })
            .catch((err) => {
                console.log(err);
            });
        console.log('User created');
    };

    return (
        <div className="customer-registration-container">
            <form className="customer-registration-form" onSubmit={createUser}>
                <div className="registration-form-details">Customer Registration</div>
                <input
                    placeholder="First Name"
                    className="registration-input"
                    type="text"
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />
                <input
                    placeholder="Username"
                    className="registration-input"
                    type="text"
                    onChange={(event) => setUsername(event.target.value)}
                />
                <input
                    placeholder="Password"
                    className="registration-input"
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}
                />
                <input
                    placeholder="Confirm Password"
                    className="registration-input"
                    type="password"
                    onChange={(event) => setConfirmPassword(event.target.value)}
                />
                <button className="registration-button" type="submit">
                    Signup
                </button>
            </form>
        </div>
    );
};

export default CustomerRegistration;
