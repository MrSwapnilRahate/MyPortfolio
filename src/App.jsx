import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import Themes from './components/Themes';
import Home from './pages/home/Home';
import About from './pages/about/About';
import WorkExp from './pages/workExp/WorkExp';
import Projects from './pages/projects/Projects';
import Skillss from './pages/skills/Skillss';
import Contact from './pages/contact/Contact';
import AboutMe from './pages/aboutMe/AboutMe';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Themes />
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='aboutMe' element={<AboutMe />} />
        <Route path='workExp' element={<WorkExp />} />
        <Route path='projects' element={<Projects />} />
        <Route path='skills' element={<Skillss />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
