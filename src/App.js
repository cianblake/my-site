import LandingPage from './pages/landingPage';
import { StyledBox } from './styled';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState, useEffect } from 'react';

const theme = createTheme();

function App() {
  const [position, setPosition] = useState({ x: '50%', y: '50%' });

  useEffect(() => {
      const handleMouseMove = (e) => {
          setPosition({ x: `${e.clientX}px`, y: `${e.clientY}px` });
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
          window.removeEventListener('mousemove', handleMouseMove);
      };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StyledBox style={{ '--x': position.x, '--y': position.y }}>
        <LandingPage />
      </StyledBox>
    </ThemeProvider>
  );
}

export default App;
