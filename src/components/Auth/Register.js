// src/components/Auth/Register.js

import React, { useState } from 'react';
import { register } from '../../utils/api';

const Register = ({ setAuthToken }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await register({ name, email, password });
      setAuthToken(data.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <p>First Name</p>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        </div>
        <div>
          <p>Last Name</p>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        </div> 
      </div>
      <div>
         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
         <input type='date'/>
      </div>
     <div>
         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
     </div>
     
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
