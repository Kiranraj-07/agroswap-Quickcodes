
import  Navbar  from './components/Navbar';
import { Tabs } from './components/Tabs';
import { ThemeProvider, useTheme } from '@interchain-ui/react';
import '@agoric/react-components/dist/style.css';
import { useEffect } from 'react';
// import { Button, Modal } from 'react-daisyui';

function Swap() {
  const { themeClass, setTheme, setColorMode } = useTheme();
  useEffect(() => {
    setColorMode('dark');
    setTheme('dark');
  }, [setTheme, setColorMode]);

  return (
    <ThemeProvider>
      <div className={themeClass}>
        
            <Navbar />
            <Tabs />
          
      </div>
    </ThemeProvider>
  );
}

export default Swap;
