import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== '' && password.trim() !== '') {
      if (!/\S+@\S+\.\S+/.test(email)) {
        toast.error('Invalid email');
      } else {
        setIsSubmitting(true);
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData && email === userData.email && password === userData.password) {
          setIsSubmitting(false);
          toast.success('Login successful!');
          localStorage.setItem('isLoggedIn', true);
          navigate('/');
        } else {
          setIsSubmitting(false);
          toast.error('Login failed.');
        }
      }
    } else {
      toast.error('Please enter email and password');
    }
  };

  return (
    <div className="container">
      <h1 className="mt-5 mb-5 text-center">Login Page</h1>
      <div className="row justify-content-center">
        <div className="col-10 col-sm-8 col-md-6 col-lg-4">
          <div className="card mt-6">
            <div className="card-body">
              <h5 className="card-title">Login</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" placeholder="Enter your password" />
                </div>
                <p className="nowrap-text">
                  Don't have an account? <Link className="nav-link" to="/signup">Sign Up</Link>
                </p>
                <button type="submit" disabled={isSubmitting} className="btn custom-button">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
