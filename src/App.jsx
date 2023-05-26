import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  const ref = React.useRef(null);
  return (
    <>
      <Parallax pages={3} ref={ref}>
        <ParallaxLayer className='bg-slate-500 opacity-70' offset={0} speed={2.5}>
          <p className='text-white'>Layers can contain anything</p>
        </ParallaxLayer>

        <ParallaxLayer className='bg-slate-700 opacity-70' sticky={{ start: 1, end: 2 }} />

        <ParallaxLayer className='bg-slate-800 dark:bg-blue-800 opacity-70' offset={2} speed={1}>
        </ParallaxLayer>
      </Parallax>
      <button
      className='absolute bottom-0 left-10 z-50'
        onClick={() => {
          document.body.classList.add('dark');
        }}
      >
        Scroll to 1
      </button>
    </>
  );
}

export default App;
