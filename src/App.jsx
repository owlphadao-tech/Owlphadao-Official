import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/NavBar';
import HomePage from './pages/HomePage';
// 1. Import your new Privacy component here
import PrivacyPolicy from './components/Privacy';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); 
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[var(--color-light)]">
        <div className="w-16 h-16 border-4 border-[var(--color-secondary)]/30 border-t-[var(--color-primary)] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="bg-[var(--color-light)] text-[var(--color-dark)] min-h-screen font-sans selection:bg-[var(--color-primary)] selection:text-[var(--color-light)] flex flex-col">
        <Navbar/>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={ <HomePage/> } />
            {/* 2. Add the Privacy route here */}
            <Route path="/privacy" element={ <PrivacyPolicy/> } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;