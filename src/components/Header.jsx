import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
  const location = useLocation();
  const linkClasses = (path) =>
    location.pathname === path ? 'nav-link active' : 'nav-link';

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="logo-link">
          <img
            src="/logos/logo-sm.png"
            alt="Hikari Magazine"
            className="logo-sm"
          />
        </Link>
        <nav className="site-nav">
          <Link to="/" className={linkClasses('/')}>
            Home
          </Link>
          <Link to="/submissions" className={linkClasses('/submissions')}>
            Submissions
          </Link>
          <Link to="/staff" className={linkClasses('/staff')}>
            Staff
          </Link>
          <Link to="/opportunities" className={linkClasses('/opportunities')}>
            Opportunities
          </Link>
          <Link to="/interviews" className={linkClasses('/interviews')}>
            Interviews
          </Link>
          <Link to="/contact" className={linkClasses('/contact')}>
            Contact
          </Link>
          <Link to="/policy" className={linkClasses('/policy')}>
            Policy
          </Link>
        </nav>
      </div>
    </header>
  );
}
