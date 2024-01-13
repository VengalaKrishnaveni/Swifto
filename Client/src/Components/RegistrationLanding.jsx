
import '../assets/RegistrationLanding.css';
import React from 'react';
import { Link } from 'react-router-dom';
import providerRegistrationImg from '../assets/provider-registration-img.jpeg';
import customerRegistrationImg from '../assets/customer-registration-img.jpeg';
import logoImg from '../assets/swifto-logo-black.png';


const RegistrationLanding = () => {
  return (
    <div className="registration-container">
      <div className="registration-content">
        <div className="welcome-logo-flex-container">
          <h1>Welcome to Swifto!</h1>
          <img className="logo" src={logoImg}></img>
        </div>
        
        <p>
          Whether you are a service provider or in need of assistance, Swifto
          connects you with reliable solutions. 
        </p>
        <p>
          Join our community and
          experience seamless assistance.
        </p>
        <div className="registration-links">
          <div className="provider-registration-img">
            <img src={providerRegistrationImg}></img>
            <Link to="/ProviderRegistration" className="registration-link">
            Register as a Service Provider
            </Link>
          </div>
          <div className="customer-registration-img">
            <img src={customerRegistrationImg}></img>
            <Link to="/CustomerRegistration" className="registration-link">
            Register as a Customer
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default RegistrationLanding;
