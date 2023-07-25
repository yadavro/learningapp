import React ,{ useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignupPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      toast.error('Please fill in all the fields.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Invalid email');
      return;
    }

    const userData = {
      name,
      email,
      password,
    };

    try {

      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success('Registration successful.'); 
      await new Promise((resolve) => setTimeout(resolve, 1000)); 

      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('isLoggedIn', true);
      navigate('/login');
    } catch (error) {
      toast.error('Registration failed.'); 
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="mt-5 text-center">Sign Up Page</h1>
      <p className='mb-5 text-center'>Create a new account</p>
      <div className="row justify-content-center">
        <div className="col-10 col-sm-8 col-md-6 col-lg-4">
          <div className="card mt-6">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="name" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" placeholder="Enter your password" />
                </div>
                <p className="nowrap-text">
                  Already have an account? <Link className="nav-link" to="/login">Login</Link>
                </p>
                {/* <button type="submit" disabled={!name || !email || !password}> */}
                <button type="submit" className="btn custom-button">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignupPage;


