import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursePage from './pages/CoursePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Navbar from './components/Navbar';
import GlobalProvider from './components/GlobalProvider';


const App = () => {
  return (
    <Router>
      <GlobalProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<PrivateRoute><CoursePage/></PrivateRoute>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </GlobalProvider>
    </Router>
  );
};

function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const redirectURL = '/login';

  if (isLoggedIn) {
    return children;
  } else {
    return <Navigate to={redirectURL} />;
  }
}

export default App;

