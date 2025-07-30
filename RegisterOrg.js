import React, { useState } from 'react';
import '../PageStyles.css';

function RegisterOrg() {
  const [formData, setFormData] = useState({
    orgName: '', adminName: '', email: '', phone: '', description: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Registration submitted! (connect to backend later)');
  };

  return (
    <div className="form-container slide-in">
      <h2>Register Organization</h2>
      <form onSubmit={handleSubmit}>
        <input name="orgName" placeholder="Organization Name" onChange={handleChange} required />
        <input name="adminName" placeholder="Admin Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="phone" placeholder="Phone Number" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default RegisterOrg;
