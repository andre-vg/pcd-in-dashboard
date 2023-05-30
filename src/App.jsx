import React, { useEffect, useRef, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Navbar from './components/Navbar';

function App() {
  const ref = useRef(null);
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
      <Parallax
        className='text-black dark:text-white bg-neutral-200 dark:bg-neutral-950'
        pages={3}
        ref={ref}
      >
        <ParallaxLayer className='bg-white dark:bg-neutral-800 transition-colors duration-300' offset={0} speed={1} />
        <ParallaxLayer className='bg-neutral-100 dark:bg-neutral-800 transition-colors duration-300' offset={1} speed={1} />

        <ParallaxLayer
          id='Home'
          className='transition-colors duration-300'
          offset={0}
          speed={0.5}
          onClick={() => ref.current.scrollTo(1)}
        >
          <div className='flex flex-col items-center justify-center h-full'>
            <h1 className='lg:text-6xl text-2xl font-bold lexend'>Apresentação PCD-in</h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          className='z-10 transition-colors duration-300'
          offset={1}
          speed={2}
          onClick={() => ref.current.scrollTo(2)}
        >
          <div className='flex flex-col items-center justify-center h-full'>
            <h1 className='text-3xl font-bold lexend'>Acessibilidade desde a fonte</h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer id='last' className='transition-colors duration-300' offset={2} speed={1.5}>
          <p>teste layer 3</p>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
