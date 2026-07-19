import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionWrapper from './hoc/SectionWrapper';

const WrappedAbout = SectionWrapper(About, 'about');
const WrappedProjects = SectionWrapper(Projects, 'projects');
const WrappedExperience = SectionWrapper(Experience, 'experience');
const WrappedContact = SectionWrapper(Contact, 'contact');

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WrappedAbout />
      <WrappedProjects />
      <WrappedExperience />
      <WrappedContact />
      <Footer />
    </>
  );
}

export default App;
