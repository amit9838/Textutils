import Navbar from './components/Navbar.js';
import About from './components/About'
import './App.css';
import TextForm from './components/TextForm.js';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
        <Navbar />
        {/* <Switch> */}
          <Route exact path='/' component={TextForm} toggleTheme={toggleTheme} theme={theme} />
          <Route exact path='/about' component={About} />
        {/* </Switch> */}
      </Router>
    </>
  );
}

export default App;
