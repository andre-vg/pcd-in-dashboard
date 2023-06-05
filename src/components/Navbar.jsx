import React from 'react';
import styled from '@emotion/styled';
import { Switch } from '@mui/material';
import Logo from '../assets/pcdin.png';
import P from '../assets/adaptive-icon.png';

function Navbar({ darkMode, setDarkMode }) {
  const MaterialUISwitch = styled(Switch)(() => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: darkMode ? '#222222' : '#d2d2d2',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: darkMode ? '#000000' : '#ffffff',
      width: 32,
      height: 32,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#000',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: darkMode ? '#222222' : '#d2d2d2',
      borderRadius: 20 / 2,
    },
  }));

  return (
    <nav class='bg-neutral-100 dark:bg-neutral-900 fixed w-full z-20 top-0 left-0 border-b border-neutral-200 dark:border-neutral-600 transition-colors duration-300 lexend font-bold shadow-md'>
      <div class='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-5 px-8'>
        <a class='items-center transition-all'>
          <img src={Logo} class='h-8 mr-3 w-6 sm:w-auto hover:w-auto object-left object-cover' alt='PCD-in Logo' />
        </a>
        <div class='flex md:order-2'>
          <MaterialUISwitch
            checked={darkMode}
            onChange={() => {
              setDarkMode(!darkMode);
              localStorage.setItem('darkMode', !darkMode);
            }}
          />
          <button
            data-collapse-toggle='navbar-sticky'
            type='button'
            class='inline-flex items-center p-2 text-sm text-neutral-500 rounded-lg md:hidden hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:ring-neutral-600'
            aria-controls='navbar-sticky'
            aria-expanded='false'
          >
            <span class='sr-only'>Open main menu</span>
            <svg
              class='w-6 h-6'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </button>
        </div>
        <div
          class='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
          id='navbar-sticky'
        >
          <ul class='flex flex-col p-4 md:p-0 mt-4 font-medium border border-neutral-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 '>
            <li>
              <a
                href='#Home'
                class='block py-2 pl-3 pr-4 text-white bg-purple-700 rounded md:bg-transparent md:text-purple-700 md:p-0 md:dark:text-purple-500'
                aria-current='page'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#'
                class='block py-2 pl-3 pr-4 text-neutral-900 rounded hover:bg-neutral-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-neutral-700'
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#'
                class='block py-2 pl-3 pr-4 text-neutral-900 rounded hover:bg-neutral-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-neutral-700'
              >
                Services
              </a>
            </li>
            <li>
              <a
                href='/login'
                class='block py-2 pl-3 pr-4 text-neutral-900 rounded hover:bg-neutral-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-neutral-700'
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
