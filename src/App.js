import React from 'react';
import './App.css';
import Homepage from './Homepage'
import AboutMe from './AboutMe'
import Projects from './Projects';
import ContactForm from './ContactForm';
import MoreSkills from './MoreSkills';
import{Routes, Route, Link} from  'react-router-dom';

function App() {
  return (
    <div className='App'>
      <nav className='nav'>
        <div>
          <Link to='/' className='nav-img'><img src="#"/></Link>
        </div>
        <div className="nav-item-container">
          <Link to='/' className='nav-item'>Homepage</Link>
          <Link to='/about-me' className='nav-item'>About Me</Link>
          <Link to='/projects' className='nav-item'>Projects</Link>
          <Link to='/contact-form' className='nav-item'>Contact</Link>
          <Link to='/more-skills' className='nav-item'>More-Skills</Link>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about-me' element = {<AboutMe />} />
        <Route path='/projects' element = {<Projects />} />
        <Route path='/contact-form' element = {<ContactForm />} />
        <Route path='/more-skills' element = {<MoreSkills />} />
      </Routes>
    </div>
  );
}

export default App;
