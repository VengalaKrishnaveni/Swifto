/* eslint-disable no-unused-vars */
import Axios from 'axios';
import '../assets/ProviderRegistration.css';
import { useState } from 'react';

const ProviderRegistration = () => {
    const [orgname, setOrgname] = useState('');
    const [location, setLocation] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3001/register", {
            Orgname: orgname,
            Location: location,
            Email: email,
            Contact: contact,
            Description: description,
            Rating: rating
        }).then(() => {
            alert("User added")
        }).catch((err) => {
            console.log(err)
        });
    }

    return (
        <div className="provider-registration-container">
            <form className="provider-registration-form" onSubmit={handleSubmit}>
                <div className="form-details">Provider Registration</div>
                <input type="text" className="input" placeholder="Organization Name" name="orgname" onChange={(e) => setOrgname(e.target.value)} />
                <input type="text" className="input" placeholder="Location" name="location" onChange={(e) => setLocation(e.target.value)} />
                <input type="email" className="input" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)} />
                <input type="tel" className="input" placeholder="Contact" name="contact" onChange={(e) => setContact(e.target.value)} />
                <input className="input" placeholder="Description" name="description" onChange={(e) => setDescription(e.target.value)} />
                <input type="number" className="input" placeholder="Rating" name="rating" step="0.1" min="0" max="5" onChange={(e) => setRating(parseFloat(e.target.value))} />
                <button className="btn" type="submit">Register</button>
            </form>
        </div>
    );
};

export default ProviderRegistration;
