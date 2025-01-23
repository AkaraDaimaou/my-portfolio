import About from './assets/components/About'
import Hero from './assets/components/Hero'
import './assets/components/Navbar'
import Footer from './assets/components/Footer'
import Header from './assets/components/Header'
import Contact from './assets/components/Contact'
import Projects from './assets/components/Projects';

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
