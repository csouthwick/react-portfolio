import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage}></Header>
      <main className="rounded container mt-5 mb-3 px-4 py-3">
        {renderPage(currentPage)}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
