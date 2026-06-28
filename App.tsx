import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Instructors from './components/Instructors';
import Gallery from './components/Gallery';
import RegistrationForm from './components/RegistrationForm';
import ParentPortal from './components/ParentPortal';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-emerald-500 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Courses />
        <Instructors />
        <Gallery />
        <RegistrationForm />
        <ParentPortal />
      </main>
      <Footer />
    </div>
  );
};

export default App;