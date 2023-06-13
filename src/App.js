import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './index.css';

console.log("Header:", Header);
console.log("Navigation", Navigation);
console.log("Footer", Footer);

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <main>
        {/* main content here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
