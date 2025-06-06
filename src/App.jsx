// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Loading from './pages/Loading';
import Home from './pages/Home';
import Submissions from './pages/Submissions';
import Staff from './pages/Staff';
import Opportunities from './pages/Opportunities';
import Interviews from './pages/Interviews';
import Contact from './pages/Contact';
import Policy from './pages/Policy';

import './styles/variables.css';
import './styles/App.css';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate a loading delay; replace with real fetch logic if needed
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submissions" element={<Submissions />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/interviews" element={<Interviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />

          {/* Fallback to Home on any unknown route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
