import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import './index.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <main>
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
