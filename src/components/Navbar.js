import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/style.css';
import menu from '../images/menu.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);


  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const navigate = useNavigate(); 


  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    toast.success('Logout successful.');
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-sm" aria-label="Thirteenth navbar example">
      <div className="container-fluid">
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation" onClick={handleMenuToggle}>
          <img src={menu} alt="Toggle Navigation" />
        </button>

        <div className={`navbar-collapse collapse ${showMenu ? 'show' : ''}`} id="navbarsExample11">
          <Link className="navbar-brand col-lg-1 me-0" to="/">E-Learning</Link>
          <ul className="navbar-nav ms-auto col-lg-4 justify-content-lg-center">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/courses">Courses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
