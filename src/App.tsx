import About from './components/About'
import Hero from './components/Hero'
import './components/Navbar'
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Contact />
        <Projects />

      </main>
      <Footer />
    </div>
  );
}

export default App;
