import React, { useEffect, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styled from '@emotion/styled';
import { Switch } from '@mui/material';
import Navbar from './components/Navbar';

function App() {
  const ref = React.useRef(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const darkModeStorage = localStorage.getItem('darkMode');
    if (darkModeStorage == 'true') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Parallax className='transition-colors duration-200' pages={3} ref={ref}>
        <ParallaxLayer className='bg-slate-500 opacity-70' offset={0} speed={2.5}>
          <p className='text-white'>Layers can contain anything</p>
        </ParallaxLayer>

        <ParallaxLayer className='bg-slate-700 opacity-70' sticky={{ start: 1, end: 2 }} />

        <ParallaxLayer
          className='bg-slate-800 dark:bg-blue-800 opacity-70 transition-colors duration-200'
          offset={2}
          speed={1}
        ></ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
