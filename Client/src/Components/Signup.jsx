/* eslint-disable no-unused-vars */
// bc e8e8e8
import '../assets/Signup.css'
import { useState } from 'react'
import Axios from 'axios'

const Signup = () => {
        
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [Name, setName] = useState('');

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
             <form className="form" onSubmit={createUser}>
                <input 
                    placeholder="Firstname" 
                    className="input" 
                    type="text" 
                    onChange={(event)=>{setName(event.target.value)}}/>
                <input 
                    placeholder="Username" 
                    className="input" 
                    type="text" 
                    onChange={(event) => setUsername(event.target.value)} />
                <input 
                    placeholder="Password" 
                    className="input" 
                    type="text" 
                    onChange={(event) => setPassword(event.target.value)} />
                <input 
                    placeholder="Confirm Password" className="input" 
                    type="text" 
                    onChange={(event) => setConfirmPassword(event.target.value)}/>
                <button 
                    className="login-button" type='submit'>
                    Signup
                </button>
              </form>
            </div>
        </>
        )
    }
    
    export default Signup