import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="antialiased font-sans">
      <Hero />
      <About />
      <Gallery />
    </div>
  );
}

export default App;