import Navbar from './components/Navbar.js';
import About from './components/About'
import './App.css';
import TextForm from './components/TextForm.js';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.body.style.backgroundColor = '#222222';
      document.body.style.color = "#ccc";
    }
    else {
      setTheme('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = "black";
    }
  }
  return (
    <>
      <Router>
        <Navbar theme = {theme} title = "TextUtils" toggleTheme={toggleTheme}/>
        {/* <TextForm exact path = '/' toggleTheme={toggleTheme} theme={theme}/> */}
        {/* <About exact path = '/about'/> */}
        <Routes>
          <Route path='/'  element = {<TextForm key="textform"  toggleTheme={toggleTheme} theme={theme}/>} />
          <Route path='/about'  element = {<About key="about" theme = {theme} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
