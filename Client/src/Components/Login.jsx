/* eslint-disable no-unused-vars */
import '../assets/Login.css'
import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError] = useState('');
        const navigate = useNavigate();

        const LoginUser = (e) => {
            e.preventDefault();
            console.log("Login")
            Axios.get('http://localhost:3001/login', {
                username: username,
                password: password
            }).then((response) => {
                if(response.data.message){
                    console.log(response)
                    localStorage.setItem('user', response.config.username);
                    localStorage.setItem('token', response.data.accessToken);
                    navigate('/providers');
                } else {
                    setError(response.data.error);
                }
            }).catch((err) => {
                setError('An error occurred while logging in.');
            });
        }

    return (
        <div className="main-container">
            <div className="service-provider-container"></div>
            <div className="customer-container"></div>
            <div className="name"><h2>SWIFTO</h2>Your reliable partner in roadside vehicle assistance.</div>
        </div>
        // <div>
        //     <div className="main-container">
        //         <div className="service-provider-container">hello</div>
        //         <div className="customer-container">hiii</div>
        //     </div>
        //     <div className="login-container">
        //         <form className="form" onSubmit={LoginUser}>
        //         <div className="form_details">Login</div> 
                 
        //             <input 
        //                 placeholder="Username" 
        //                 className="input" 
        //                 type="text" 
        //                 onChange={(event)=>{setUsername(event.target.value)}}
        //                 />
        //             <input 
        //                 placeholder="Password" 
        //                 className="input" 
        //                 type="password" 
        //                 onChange={(event) => setPassword(event.target.value)} />
        //             <button className='btn' type='submit'>
        //                     Login
        //             </button>
        //         </form>
        //     </div>
               
        // </div>
    );
};

export default Login;
