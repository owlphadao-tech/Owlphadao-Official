import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly scroll to the top left of the page
    window.scrollTo(0, 0);
  }, [pathname]); // This effect runs every time the pathname changes

  return null; // This component doesn't render anything visually
};

export default ScrollToTop;