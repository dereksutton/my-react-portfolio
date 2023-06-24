import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './index.css';


const App = () => {

  const [selectedSection, setSelectedSection] = useState('About Me');


  return (
    <div className="App">
      <Header />
      <Navigation selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
      <main>
        {selectedSection === 'About Me' && <AboutMe />}
        {selectedSection === 'Portfolio' && <Portfolio />}
        {selectedSection === 'Contact' && <Contact />}
        {selectedSection === 'Resume' && <Resume />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
