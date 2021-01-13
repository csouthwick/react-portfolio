import './App.css';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <main className="rounded container mt-5 mb-3 px-4 py-3">
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
