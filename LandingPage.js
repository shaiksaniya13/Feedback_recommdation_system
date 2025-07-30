import React from 'react';
import { Link } from 'react-router-dom';
import '../PageStyles.css';

function LandingPage() {
  return (
    <div className="container fade-in">
      <h1>Feedback Collection System</h1>
      <Link to="/register" className="btn">Register Organization</Link>
      <Link to="/login" className="btn">Login as Admin</Link>
      <Link to="/login" className="btn">Login as User</Link>
    </div>
  );
}
export default LandingPage;
