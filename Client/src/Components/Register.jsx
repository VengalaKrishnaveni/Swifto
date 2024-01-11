import Axios from 'axios';
import '../assets/Register.css'
import { useState } from 'react'
const Register = () => {

    const [orgname, setOrgname] = useState('');
    const [location, setLocation] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState(0);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send formData to backend
        console.log({
            Orgname: orgname,
            Location: location,
            Email: email,
            Contact: contact,
            Description: description,
            Rating: rating
        });
        Axios.post("http://localhost:3001/register", {
            Orgname: orgname,
            Location: location,
            Email: email,
            Contact: contact,
            Description: description,
            Rating: rating
        }).then(() => {
            alert("User added")
        }
        ).catch((err) => {
            console.log(err)
        }
        )
        console.log("User created")
    }

    return (

        <div className="SignupContainer">

            <form className="form2" onSubmit={handleSubmit}>
            <div className="form_front">
                <div className="form_details">SignUp</div>
                <input type="text" className="input" placeholder="Organization Name" name="orgname" onChange={(e) => setOrgname(e.target.value)} />
                <input type="text" className="input" placeholder="Location" name="location" onChange={(e) => setLocation(e.target.value)} />
                <input type="email" className="input" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)} />
                <input type="tel" className="input" placeholder="Contact" name="contact" onChange={(e) => setContact(e.target.value)} />
                <input className="input" placeholder="Description" name="description" onChange={(e) => setDescription(e.target.value)} />
                <input type="number" className="input" placeholder="Rating" name="rating" step="0.1" min="0" max="5" onChange={(e) => setRating(parseFloat(e.target.value))} />
                <button className="btn" onClick={handleSubmit}>Register</button>
                
            </div>
            </form>
        </div>
    );
};
export default Register