import { useState, useEffect } from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="clients">
        <Clients />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

const Navbar = () => {
  const [isAfterHome, setIsAfterHome] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'services', label: 'SERVICES' },
    { id: 'clients', label: 'CLIENTS' },
    { id: 'portfolio', label: 'PORTFOLIO' },
    { id: 'contact', label: 'CONTACT' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar position
      const homeSection = document.getElementById('home');
      const homeSectionHeight = homeSection?.offsetHeight || window.innerHeight;

      setIsAfterHome(window.scrollY > homeSectionHeight);

      // Handle active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav
      className={`
        fixed top-10 z-50 text-black
        ${isAfterHome ? 'left-10' : 'right-10'}
        transition-all duration-500 ease-in-out
        flex flex-row justify-start items-center
        
      `}
    >
      {navItems.map((item, index) => (
        <div
          key={item.id}
          className="text-right px-2 text-xl"
          onClick={() => scrollToSection(item.id)}
        >
          <span
            className={`
              align-middle cursor-pointer
              transition-all duration-300
              hover:text-gray-500
              ${activeSection === item.id ? 'font-bold' : 'font-normal'}
            `}
          >
            {item.label}
          </span>
          {index !== navItems.length - 1 && (
            <span className="text-red-500 align-middle"> |</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default App;