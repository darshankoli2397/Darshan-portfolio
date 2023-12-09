import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css'; 

const App = () => {
  return (
    <div>
      <Header />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
