import React from 'react';
import Sidebar from './components/Sidebar';
import ProfileCard from './components/ProfileCard';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ReactNativeApp from './components/ReactNativeApp';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      {/* 1. Icon Sidebar (Leftmost) */}
      <Sidebar />

      {/* 2. Fixed Profile Panel */}
      <aside className="fixed-profile-panel">
        <ProfileCard />
      </aside>

      {/* 3. Scrollable Content Area */}
      <main className="main-content">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <ReactNativeApp />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
