/* eslint-disable no-unused-vars */
// bc e8e8e8
import '../assets/Signup.css'
import { useState } from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router-dom';

const Signup = () => {
        const history = useHistory();
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');
        const [Name, setName] = useState('');
        const [error, setError] = useState(''); 
        
        const LoginUser = (e) => {
            e.preventDefault();
            console.log("Login")
            Axios.get('http://localhost:3001/login', {
                username: username,
                password: password
            }).then((response) => {
                if(response.data.message){
                    console.log(response)
                    localStorage.setItem('token', response.data.accessToken);
                    history.pop('/providers');
                } else {
                    setError(response.data.error);
                }
            }).catch((err) => {
                setError('An error occurred while logging in.');
            });
        }

    const createUser = () => {
        if(password !== confirmPassword){
            alert("Passwords don't match")
            return
        }
        Axios.post('http://localhost:3001/signup', {
            username: username,
            password: password,
            Name: Name
        }).then(() => {
            alert("User added")
        })
        console.log("User created")
    }
    return (
        <>
            <div className="container">
                <input type="checkbox" id="signup_toggle" />
                <form className="form">
                    <div className="form_front">
                        <div className="form_details">Login</div>
                        <input placeholder="Username" className="input" type="text" onChange={(event)=>{setUsername(event.target.value)}}/>
                        <input placeholder="Password" className="input" type="password" onChange={(event) => setPassword(event.target.value)} />
                        <button className="btn" onClick={LoginUser}>Login</button>
                        <span className="switch"><p> Don&apos;t have an account? </p>
                            <label className="signup_tog" htmlFor="signup_toggle">
                                Sign Up
                            </label>
                        </span>
                    </div>
                    <div className="form_back">
                        <div className="form_details">
                            SignUp
                        </div>
                        <input 
                            placeholder="Firstname" 
                            className="input" 
                            type="text" 
                            onChange={
                                (event)=>{
                                setName(event.target.value)
                                }}/>
                        <input placeholder="Username" className="input" type="text" onChange={(event) => setUsername(event.target.value)} />
                        <input placeholder="Password" className="input" type="text" onChange={(event) => setPassword(event.target.value)} />
                        <input placeholder="Confirm Password" className="input" type="text" onChange={(event) => setConfirmPassword(event.target.value)} />

                        <button className="btn" onClick={ createUser}>Signup</button>
                        <span className="switch"><p>Already have an account? </p>
                            <label className="signup_tog" htmlFor ="signup_toggle">
                                Sign In
                            </label>
                        </span>
                    </div>
                </form>
            </div>
        </>
        )
    }
    
    export default Signup