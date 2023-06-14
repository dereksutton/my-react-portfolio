import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import './index.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <main>
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default App;
