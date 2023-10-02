import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import PortfolioPage from './pages/portfolioPage';
import { StyledBox } from './styled';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/portfolio/:projectId" element={<PortfolioPage />} />
          </Routes>
        </Router>
      </StyledBox>
    </ThemeProvider>
  );
}

export default App;
