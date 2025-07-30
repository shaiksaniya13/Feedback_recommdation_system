import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import RegisterOrg from './components/RegisterOrg';
import Login from './components/Login';
import './PageStyles.css';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import UserDashboard from './components/Dashboard/UserDashboard';
import CreateForm from './components/Forms/CreateForm';
import ViewResponses from './components/Analytics/ViewResponses';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterOrg />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
  <Route path="/user-dashboard" element={<UserDashboard />} />
  <Route path="/create-form" element={<CreateForm />} />
  <Route path="/view-responses" element={<ViewResponses />} />
</Routes>
    </Router>
  );
}

export default App;
