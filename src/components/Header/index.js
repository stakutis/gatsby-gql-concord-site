import React, { useEffect, useState } from 'react';
import MobileHeader from '../MobileHeader';
import DesktopHeader from '../DesktopHeader';

const Header = () => {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 900) setMobile(true);
  });

  return isMobile ? <MobileHeader /> : <DesktopHeader />;
};

export default Header;
