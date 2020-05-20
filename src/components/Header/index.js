import React, { useEffect, useState } from 'react';
import MobileHeader from '../MobileHeader';
import DesktopHeader from '../DesktopHeader';
import Header2 from '../Header2';

const Header = () => {
  const windowWidth = typeof window !== 'undefined' && window.innerWidth;

  const [innerWidthState, setWidth] = useState(windowWidth);

  useEffect(() => {
    let handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    window.removeEventListener('resize', handleResize);
  }, [innerWidthState]);

  return <Header2 />;
};

export default Header;
