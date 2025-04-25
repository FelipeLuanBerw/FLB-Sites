// hooks/useWindowWidth.js
import React from 'react';
import { useState, useEffect } from 'react';
import MenuDesktop from './desktopHeader/index.js';
import MenuMobile from './mobileHeader/index.js';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

export default function Header() {
  const width = useWindowWidth();

  return <>{width > 458 ? <MenuDesktop /> : <MenuMobile />}</>;
}
