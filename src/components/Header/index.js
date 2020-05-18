import React, { useEffect, useState } from 'react';
import MobileHeader from '../MobileHeader';
import DesktopHeader from '../DesktopHeader';

const windowWidth = typeof window !== 'undefined' && window.innerWidth;

const Header = () => {
  const [innerWidthState, setWidth] = useState(windowWidth);

  useEffect(() => {
    setWidth(window.innerWidth);
  });

  useEffect(() => {
    let handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    window.removeEventListener('resize', handleResize);
  }, [innerWidthState]);

  return innerWidthState < 900 ? <MobileHeader /> : <DesktopHeader />;
};

export default Header;
